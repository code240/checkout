import React, { useContext, useEffect, useState } from "react";
import "./LoginComponent.scss";
import { AppContext } from "../../Contexts/AppProvider";
import { useNavigate, useParams } from "react-router-dom";
import { GetDialCode } from "../../Data/Countries";
import { ValidatePhone } from "../../Helper/Helper";
import Api from "../../Helper/Api";
import { GetToken } from "../../Helper/Storage";
import { Button, Message, toaster, useToaster } from 'rsuite';

const LoginComponent = () => {
    const { setActiveSection, phoneNumber, setPhoneNumber, otpService, setOtpService, countryCode, setCountryCode } = useContext(AppContext);

    const [mobileErrorTracker, setMobileErrorTracker] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { orderId, shopId } = useParams();

    useEffect(() => {
        if (GetToken()) {
            navigate(`/${shopId}/${orderId}/checkout`)
        }
    })

    const HandleLogin = async () => {
        if (otpService == 1) {
            setOtpService(2);
        } else {
            setOtpService(1);
        }

        if (!ValidatePhone(phoneNumber, countryCode)) {
            return false;
        }
        setLoading(true);
        let data = {
            "order_id": orderId,
            "send_using": otpService,
            "phone": phoneNumber,
            "calling_code": parseInt((GetDialCode(countryCode) ?? "0")?.replaceAll("+", "")),
            "country_code": countryCode,
            "is_email": false,
            "website_url": window.SHOP_URL,
            "cf_token": "cf_token"
        }

        let response = await Api.post(shopId + "/phone/otp/send", data)
        let responseData = response?.data;
        if (responseData?.status) {
            toaster.push(
                <Message showIcon type="success" closable>
                    OTP sent successfully!
                </Message>,
                { placement: 'topCenter', duration: 3000 }
            );
            setLoading(false);
            navigate("../verification");

        } else {
            if (responseData?.error?.data?.LimitExceed) {
                toaster.push(
                    <Message showIcon type="error" closable>
                        You have requested an OTP multiple times for this number. Now OTP requests are temporarily disabled for your number.
                    </Message>,
                    { placement: 'topCenter', duration: 3000 }
                );
            } else if (responseData?.error?.code == "C100") {
                toaster.push(
                    <Message showIcon type="error" closable>
                        Invalid captcha!
                    </Message>,
                    { placement: 'topCenter', duration: 3000 }
                );
            } else {
                toaster.push(
                    <Message showIcon type="error" closable>
                        Failed to send OTP on this Mobile number.
                    </Message>,
                    { placement: 'topCenter', duration: 3000 }
                );
            }

            setLoading(false);
        }

    }


    return (
        <div className="LoginComponent">

            <h6 className="quicksand login-title">
                Continue with mobile
            </h6>
            <div className="input-wraps quicksand">
                <h6 className="quicksand" onClick={() => { }}>
                    <select className="selectBox" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                        <option value={"IN"}>India (+91)</option>
                        <option value={"CA"}>Canada (+1)</option>
                    </select>
                    {GetDialCode(countryCode)}
                </h6>
                <input type="text" inputMode="numeric" onBlur={() => { setMobileErrorTracker(true); }} onInput={() => { }} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="quicksand" placeholder="9416XXXXXX" />

            </div>
            {
                mobileErrorTracker && !ValidatePhone(phoneNumber, countryCode) ? (
                    <small className="danger-text quicksand">
                        Please enter a valid mobile number.
                    </small>
                ) : null
            }
            <small className="info-text quicksand">
                <span className="text-danger">*</span> I accept that I have read and understood the Jivaayurveda's Policies and T&C.
            </small>
            <button className="submit-btn quicksand" onClick={() => HandleLogin()} disabled={loading}>
                {
                    !loading ? (
                        "Proceed to OTP"
                    ) : <span class="spinner"></span>
                }
            </button>
        </div>
    );
};

export default LoginComponent;
