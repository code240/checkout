import React, { useContext, useEffect, useState } from "react";
import "./AddressPage.scss";
import { AppContext } from "../../Contexts/AppProvider";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Coupons from "../../Components/Coupons/Coupons";
import { useNavigate, useParams } from "react-router-dom";
import { GetToken } from "../../Helper/Storage";
import Api from "../../Helper/Api";
import { GetDialCode } from "../../Data/Countries";
import { BasicContext } from "../../Contexts/BasicDataProvider";

const AddressPage = () => {
    const navigate = useNavigate();
    const { orderId, shopId } = useParams();
    const { addressFields, addressSelectionPage } = useContext(AppContext);
    const { UpdateOrder, userLatestAdderess, setUserLatestAdderess, setShowFullScreenLoader } = useContext(BasicContext);
    const [needLandmark, setNeedLandmark] = useState(false);
    const [countryCode, setCountryCode] = useState("IN")

    const [formData, setFormData] = useState({
        country: "IN",
        pincode: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        landmark: "",
        city: "",
        state: "",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    // Regex validations
    const regex = {
        pincode: /^[1-9][0-9]{5}$/,
        firstname: /^[A-Za-z\s]{2,}$/,
        lastname: /^[A-Za-z\s]{2,}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^[6-9][0-9]{9}$/,
        address: /^.{5,}$/,
        landmark: /^.{0,50}$/,
        city: /^[A-Za-z\s]{2,}$/,
    };

    const validateField = (name, value) => {
        switch (name) {
            case "pincode":
                if (!regex.pincode.test(value)) return "Enter valid 6-digit pincode";
                break;
            case "firstName":
                if (!regex.firstname.test(value)) return "Enter valid first name";
                break;
            case "lastName":
                if (!regex.lastname.test(value)) return "Enter valid last name";
                break;
            case "email":
                if (!regex.email.test(value)) return "Enter valid email address";
                break;
            case "phone":
                if (!regex.phone.test(value)) return "Enter valid 10-digit phone";
                break;
            case "address":
                if (!regex.address.test(value)) return "Enter detailed address";
                break;
            case "city":
                if (!regex.city.test(value)) return "Enter valid city name";
                break;
            case "landmark":
                if (!regex.landmark.test(value)) return "Enter a valid landmark";
                break;
            case "state":
                if (!value) return "Select a state";
                break;
            default:
                return "";
        }
        return "";
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));

        if (touched[name]) {
            const newError = validateField(name, value);
            setErrors((prev) => ({ ...prev, [name]: newError }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        const newError = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: newError }));
    };

    const handleSubmit = async () => {
        const validationErrors = validateForm();
        setErrors(validationErrors);
        setTouched(
            Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
        );

        if (Object.keys(validationErrors).length === 0) {
            console.log("✅ Address Data:", formData);
        } else {
            console.log("❌ Validation Errors:", validationErrors);
            return
        }
        let payload = {
            "line1": formData.address,
            "line2": formData.landmark == "" ? formData.address : formData.landmark,
            "city": formData.city,
            "state": formData.state,
            "country": formData.country,
            "zipcode": formData.pincode,
            "phone": GetDialCode(countryCode ?? "IN") + formData.phone,
            "email": formData.email,
            "first_name": formData.firstName,
            "last_name": formData.lastName,
            "alerts": "{\"emailAlerts\":true,\"saveAddress\":true,\"mobileAlerts\":false}"
        }
        setShowFullScreenLoader(true);

        const response = await Api.post(
            `${shopId}/user/address/save`,
            payload
        );

        if (response.data.status && response.data?.data?.id) {
            let updateOrder = await UpdateOrder(response.data?.data?.id, shopId, orderId);

            if (updateOrder) {
                setUserLatestAdderess({
                    "address_ref_id": response.data.data.id,
                    "city": payload.city,
                    "country": payload.country,
                    "email": payload.email,
                    "firstName": payload.first_name,
                    "lastName": payload.last_name,
                    "line1": payload.line1,
                    "line2": payload.line2,
                    "phone": payload.phone,
                    "state": payload.state,
                    "zipcode": payload.zipcode
                });
                setShowFullScreenLoader(false);
                navigate(`/${shopId}/${orderId}/checkout`)
            }
            setShowFullScreenLoader(false);

        }

    };

    const backToAddressSelection = () => {
        navigate(`/${shopId}/${orderId}/checkout`);
    };

    useEffect(() => {
        if (!GetToken()) {
            navigate(`/${shopId}/${orderId}/login`);
        }
    }, []);

    return (
        <div className="AddressPage">
            <OrderSummary />
            <Coupons />

            <main>
                <h6 className="quicksand back-option" onClick={backToAddressSelection}>
                    <i className="bi bi-arrow-left"></i> Add new address
                </h6>

                <div className="address-main">
                    {/* Country */}
                    <div className="input-group select-input-wrap">
                        <select
                            className="select quicksand"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option value="IN">India</option>
                            <option value="CA">Canada</option>
                        </select>
                    </div>
                    <div className="gap"></div>

                    {/* Pincode */}
                    <div className="input-group">
                        <span className="floating-fieldname quicksand">Pincode</span>
                        <input
                            className={`input quicksand ${touched.pincode && errors.pincode ? "error-border" : ""
                                }`}
                            type="text"
                            name="pincode"
                            placeholder="Pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {touched.pincode && errors.pincode && (
                        <p className="quicksand error-text">{errors.pincode}</p>
                    )}
                    <div className="gap"></div>

                    {/* First + Last Name */}
                    <div className="input-group-2">
                        <div className="input-group">
                            <span className="floating-fieldname quicksand">First Name</span>
                            <input
                                className={`input quicksand ${touched.firstName && errors.firstName ? "error-border" : ""
                                    }`}
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                        </div>

                        <div className="input-group">
                            <span className="floating-fieldname quicksand">Last Name</span>
                            <input
                                className={`input quicksand ${touched.lastName && errors.lastName ? "error-border" : ""
                                    }`}
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                        </div>
                    </div>
                    <div className="error-container">
                        <div>
                            {touched.firstName && errors.firstName && (
                                <p className="quicksand error-text">{errors.firstName}</p>
                            )}
                        </div>
                        <div>
                            {touched.lastName && errors.lastName && (
                                <p className="quicksand error-text">{errors.lastName}</p>
                            )}
                        </div>
                    </div>

                    <div className="gap"></div>


                    {/* Email */}
                    <div className="input-group">
                        <span className="floating-fieldname quicksand">Email</span>
                        <input
                            className={`input quicksand ${touched.email && errors.email ? "error-border" : ""
                                }`}
                            type="text"
                            name="email"
                            placeholder="peter@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {touched.email && errors.email && (
                        <p className="quicksand error-text">{errors.email}</p>
                    )}
                    <div className="gap"></div>

                    {/* Phone */}
                    <div className="input-group">
                        <span className="floating-fieldname quicksand">Phone</span>
                        <div className="combined-input">
                            <h5 className='quicksand phonecode'>
                                {GetDialCode(countryCode)}
                                <select className='phonecode' value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                                    <option value={"IN"}>+91</option>
                                    <option value={"CA"}>+1</option>
                                </select>
                            </h5>
                            <input
                                className={`input quicksand ${touched.phone && errors.phone ? "error-border" : ""
                                    }`}
                                type="text"
                                name="phone"
                                placeholder="9416XXXXXX"
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                    </div>
                    {touched.phone && errors.phone && (
                        <p className="quicksand error-text">{errors.phone}</p>
                    )}
                    <div className="gap"></div>

                    {/* Address */}
                    <div className="input-group">
                        <span className="floating-fieldname quicksand">Full Address</span>
                        <input
                            className={`input quicksand ${touched.address && errors.address ? "error-border" : ""
                                }`}
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {touched.address && errors.address && (
                        <p className="quicksand error-text">{errors.address}</p>
                    )}
                    <div className="gap"></div>

                    {/* Landmark (optional) */}
                    {needLandmark && (
                        <>
                            <div className="input-group">
                                <span className="floating-fieldname quicksand">Landmark</span>
                                <input
                                    className="input quicksand"
                                    type="text"
                                    name="landmark"
                                    placeholder="Landmark"
                                    value={formData.landmark}
                                    onChange={handleChange}
                                />
                            </div>
                            {touched.landmark && errors.landmark && (
                                <p className="quicksand error-text">{errors.landmark}</p>
                            )}
                        </>
                    )}


                    {/* Toggle Landmark */}
                    <span
                        className="quicksand option-button"
                        onClick={() => setNeedLandmark(!needLandmark)}
                    >
                        {!needLandmark ? (
                            <>
                                <i className="bi bi-plus-lg"></i> Add Landmark
                            </>
                        ) : (
                            <>
                                <i className="bi bi-eye-slash"></i> Hide landmark
                            </>
                        )}
                    </span>
                    <div className="gap"></div>

                    {/* City + State */}
                    <div className="input-group-2">
                        <div className="input-group">
                            <span className="floating-fieldname quicksand">City</span>
                            <input
                                className={`input quicksand ${touched.city && errors.city ? "error-border" : ""
                                    }`}
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>


                        <div className="input-group">
                            <span className="floating-fieldname quicksand">State</span>
                            <select
                                className={`select quicksand ${touched.state && errors.state ? "error-border" : ""
                                    }`}
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option value="">Select State</option>
                                <option value="HR">Haryana</option>
                                <option value="DL">Delhi</option>
                                <option value="MH">Maharashtra</option>
                            </select>
                        </div>
                    </div>
                    <div className="error-container">
                        <div>
                            {touched.city && errors.city && (
                                <p className="quicksand error-text">{errors.city}</p>
                            )}
                        </div>
                        <div>
                            {touched.state && errors.state && (
                                <p className="quicksand error-text">{errors.state}</p>
                            )}
                        </div>
                    </div>
                    <div className="gap"></div>

                    {/* Submit */}
                    <button className="submit-button quicksand" onClick={handleSubmit}>
                        Save address
                    </button>
                </div>
            </main>
        </div>
    );
};

export default AddressPage;
