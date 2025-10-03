
import React, { useContext, useEffect, useState } from 'react'
import './AddressPage.scss';
import { AppContext } from '../../Contexts/AppProvider';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import Coupons from '../../Components/Coupons/Coupons';
import ShippingAddress from '../../Components/Shipping/ShippingAddress';
import ShippingMethod from '../../Components/ShippingMethod/ShippingMethod';
import PaymentButtons from '../../Components/PaymentButtons/PaymentButtons';
import Api from '../../Helper/Api';
import { useNavigate, useParams } from 'react-router-dom';
import { GetToken } from '../../Helper/Storage';

const AddressPage = () => {
    const navigate = useNavigate();
    const { orderId, shopId } = useParams();
    const { addressFields, addressSelectionPage } = useContext(AppContext);
    const [needLandmark, setNeedLandmark] = useState(false);

    const backToAddressSelection = () => {
        navigate(`/${shopId}/${orderId}/checkout`)
    };

    useEffect(() => {
        if (!GetToken()) {
            navigate(`/${shopId}/${orderId}/login`)
        }
    }, [])

    return (
        <div className='AddressPage'>
            <OrderSummary></OrderSummary>
            <Coupons></Coupons>
            <main>

                <h6
                    className="quicksand back-option"
                    onClick={() => backToAddressSelection()}
                >
                    <i className="bi bi-arrow-left"></i> Add new address
                </h6>
                <div className="address-main">
                    <div className="input-group select-input-wrap">
                        <select className="select quicksand">
                            <option value="IN">India</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <span className="floating-fieldname quicksand">
                            Pincode
                        </span>
                        <input
                            className="input quicksand"
                            type="text"
                            placeholder="Pincode"
                        />
                    </div>
                    <div className="input-group-2">
                        <div className="input-group">
                            <span className="floating-fieldname quicksand">
                                First Name
                            </span>
                            <input
                                className="input quicksand"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="input-group">
                            <span className="floating-fieldname quicksand">
                                Last Name
                            </span>
                            <input
                                className="input quicksand"
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <span className="floating-fieldname quicksand">
                            Email
                        </span>
                        <input
                            className="input quicksand"
                            type="text"
                            placeholder="peter@email.com"
                        />
                    </div>
                    <div className="input-group">
                        <span className="floating-fieldname quicksand">
                            Address
                        </span>
                        <input
                            className="input quicksand"
                            type="text"
                            placeholder="Address"
                        />
                    </div>
                    {needLandmark ? (
                        <div className="input-group">
                            <span className="floating-fieldname quicksand">
                                Landmark
                            </span>
                            <input
                                className="input quicksand"
                                type="text"
                                placeholder="Landmark"
                            />
                        </div>
                    ) : null}
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
                                <i className="bi bi-eye-slash"></i> Hide
                                landmark
                            </>
                        )}
                    </span>

                    <div className="input-group-2">
                        <div className="input-group">
                            <span className="floating-fieldname quicksand">
                                City
                            </span>
                            <input
                                className="input quicksand"
                                type="text"
                                placeholder="City"
                            />
                        </div>
                        <div className="input-group">
                            <span className="floating-fieldname quicksand">
                                State
                            </span>
                            <select className="select quicksand">
                                <option value="HR">Haryana</option>
                            </select>
                        </div>
                    </div>

                    <button className="submit-button quicksand">
                        Save address
                    </button>
                </div>
            </main>
        </div>
    )
}

export default AddressPage;