import React, { useContext, useState } from "react";
import "./VerificationComponent.scss";
import { AppContext } from "../../Contexts/AppProvider";
import { useNavigate, useParams } from "react-router-dom";
import { GetDialCode } from "../../Data/Countries";
import Api from "../../Helper/Api";
import { SetToken } from "../../Helper/Storage";
import { Button, Message, toaster, useToaster } from 'rsuite';
import { BasicContext } from "../../Contexts/BasicDataProvider";

const VerificationComponent = () => {
    const { setActiveSection, phoneNumber, countryCode } = useContext(AppContext);
    const { FetchAddress } = useContext(BasicContext);
    const [loading, setLoading] = useState(false);
    const [otpValue, setOtpValue] = useState("");
    const navigate = useNavigate();
    const { orderId, shopId } = useParams();

    const handleVerifyOtp = async (givenOtp = "") => {
        if (givenOtp?.length != 4) {
            // otp incomplete
            return;
        }
        let data = {
            "order_id": orderId,
            "otp": parseInt(givenOtp),
            "phone": phoneNumber
        }
        setLoading(true);
        let response = await Api.post(shopId + "/phone/otp/verify", data);
        let responseData = response?.data;
        setOtpValue("");
        setLoading(false);
        if (responseData?.status && responseData?.data) {
            toaster.push(
                <Message showIcon type="success" closable>
                    Verification complete!
                </Message>,
                { placement: 'topCenter', duration: 3000 }
            );
            SetToken(responseData.data);
            const navigationRoute = await FetchAddress(shopId, orderId)
            navigate(navigationRoute);
        } else {
            if (responseData?.error?.data?.AttemptLeft > 0) {
                toaster.push(
                    <Message showIcon type="error" closable>
                        Invalid OTP. You have {responseData?.error?.data?.AttemptLeft} attempt(s) remaining.
                    </Message>,
                    { placement: 'topCenter', duration: 3000 }
                );
            } else if (responseData?.error?.data?.AttemptLeft == 0) {
                toaster.push(
                    <Message showIcon type="error" closable>
                        You have entered an incorrect OTP multiple times. This OTP has now expired.
                    </Message>,
                    { placement: 'topCenter', duration: 3000 }
                );
            } else {
                toaster.push(
                    <Message showIcon type="error" closable>
                        Invalid OTP. Please try again.
                    </Message>,
                    { placement: 'topCenter', duration: 3000 }
                );
            }
        }
    };

    return (
        <div className="VerificationComponent">
            <h6 className="quicksand login-title">
                Verify your OTP
            </h6>
            <span className="info-text-1 quicksand">
                4-digit OTP sent to your mobile number {GetDialCode(countryCode)}-{phoneNumber}&nbsp;&#183;&nbsp;
                <span className="primary-link-btn quicksand" onClick={() => navigate(`/${shopId}/${orderId}/login`)}>Change?</span>
            </span>
            <div className="input-wraps quicksand">
                <input
                    type="text"
                    value={otpValue}
                    onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 4);
                        setOtpValue(val);
                        if (val.length === 4) {
                            handleVerifyOtp(val);
                        }
                    }}
                    inputMode="numeric"
                    className="quicksand"
                    autoComplete="off"
                    placeholder=" OTP"
                    maxLength={4}
                />
            </div>
            <button className="quicksand submit-btn" onClick={handleVerifyOtp}>
                {
                    !loading ? (
                        "Verify OTP"
                    ) : <span className="spinner"></span>
                }
            </button>
        </div>
    );
};

export default VerificationComponent;
