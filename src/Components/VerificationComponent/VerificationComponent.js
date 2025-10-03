import React, { useContext, useState } from "react";
import "./VerificationComponent.scss";
import { AppContext } from "../../Contexts/AppProvider";
import { useNavigate, useParams } from "react-router-dom";
import { GetDialCode } from "../../Data/Countries";
import Api from "../../Helper/Api";
import { SetToken } from "../../Helper/Storage";

const VerificationComponent = () => {
    const { setActiveSection, phoneNumber, countryCode } = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const [otpValue, setOtpValue] = useState("");
    const navigate = useNavigate();
    const { orderId, shopId } = useParams();

    const handleVerifyOtp = async () => {
        if (otpValue?.length != 4) {
            // otp incomplete
            return;
        }
        let data = {
            "order_id": orderId,
            "otp": parseInt(otpValue),
            "phone": phoneNumber
        }
        setLoading(true);
        let response = await Api.post(shopId + "/phone/otp/verify", data);
        let responseData = response?.data;
        setOtpValue("");
        setLoading(false);
        if (responseData?.status && responseData?.data) {
            // alert 
            SetToken(responseData.data);
            navigate(`/${shopId}/${orderId}/checkout`);
            console.log("logibn,...");
            
        } else {
            // alert 
        }
    };

    return (
        <div className="VerificationComponent">
            <h6 className="quicksand login-title">
                Verify your OTP
            </h6>
            <span className="info-text-1 quicksand">
                4-digit OTP sent to your mobile number {GetDialCode(countryCode)}-{phoneNumber}&nbsp;&#183;&nbsp;
                <span className="primary-link-btn quicksand" onClick={() => navigate("/login")}>Change?</span>
            </span>
            <div className="input-wraps quicksand">
                <input type="password" value={otpValue} onChange={(e) => setOtpValue(e.target.value)} inputMode="numeric" className="quicksand" autoComplete="false" placeholder=" OTP" />
            </div>
            <button className="quicksand submit-btn" onClick={handleVerifyOtp}>
                {
                    !loading ? (
                        "Verify OTP"
                    ) : <span class="spinner"></span>
                }
            </button>
        </div>
    );
};

export default VerificationComponent;
