import React, { useContext } from "react";
import "./LoginComponent.scss";
import { AppContext } from "../../Contexts/AppProvider";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
    const { setActiveSection } = useContext(AppContext);
    const navigate = useNavigate();

    const HandleLogin = () => {
        navigate("/verification");
    }


    return (
        <div className="LoginComponent">

            <h6 className="quicksand login-title">
                Continue with mobile
            </h6>
            <div className="input-wraps quicksand">
                <h6 className="quicksand">
                    +91
                </h6>
                <input type="text" inputMode="numeric" className="quicksand" placeholder="9416XXXXXX"/>

            </div>
            <small className="info-text quicksand">
                <span className="text-danger">*</span> I accept that I have read and understood the Jivaayurveda's Policies and T&C.
            </small>
            <button className="submit-btn quicksand" onClick={() => HandleLogin()}>
                Proceed to OTP
            </button>
        </div>
    );
};

export default LoginComponent;
