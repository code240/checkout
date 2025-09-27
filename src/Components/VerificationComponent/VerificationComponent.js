import React, { useContext } from "react";
import "./VerificationComponent.scss";
import { AppContext } from "../../Contexts/AppProvider";
import { useNavigate } from "react-router-dom";

const VerificationComponent = () => {
    const { setActiveSection } = useContext(AppContext);
    const navigate = useNavigate();

    const handleVerifyOtp = () => {
        navigate("/checkout");
    };

    return (
        <div className="VerificationComponent">
            <h6 className="quicksand login-title">
                Verify your OTP
            </h6>
            <span className="info-text-1 quicksand">
                OTP sent to your mobile number +918930395XX7&nbsp;&#183;&nbsp; 
                <span className="primary-link-btn quicksand" onClick={() => navigate("/login")}>Change?</span>
            </span>
            <div className="input-wraps quicksand">
                <input type="password" inputMode="numeric" className="quicksand" autoComplete="false" placeholder=" OTP" />
            </div>
            <button className="quicksand submit-btn" onClick={handleVerifyOtp}>
                Verify OTP
            </button>
        </div>
    );
};

export default VerificationComponent;
