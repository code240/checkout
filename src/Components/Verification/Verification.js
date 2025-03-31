import React, { useContext } from "react";
import "./Verification.scss";
import { AppContext } from "../../Contexts/AppProvider";

const Verification = () => {
    const { setActiveSection } = useContext(AppContext);
    return (
        <div className="Verification">
            <h6 className="quicksand login-title">
                Verify your OTP
            </h6>
            <span className="info-text-1 quicksand">
                OTP sent to your mobile number +918930395XX7&nbsp;&#183;&nbsp; 
                <span className="primary-link-btn quicksand" onClick={() => setActiveSection("LOGIN")}>Change?</span>
            </span>
            <div className="input-wraps quicksand">
                <input type="password" className="quicksand" autoComplete="false" placeholder=" ****"/>
            </div>
            <button className="submit-btn quicksand" onClick={() => setActiveSection("SHIPPING")}>
                Verify OTP
            </button>
        </div>
    );
};

export default Verification;
