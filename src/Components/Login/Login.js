import React, { useContext } from "react";
import "./Login.scss";
import { AppContext } from "../../Contexts/AppProvider";

const Login = () => {
    const { setActiveSection } = useContext(AppContext);
    return (
        <div className="Login">
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
                <span className="text-danger">*</span> Please ensure the mobile number entered belongs to the order placer for OTP verification on the next screen.
            </small>
            <button className="submit-btn quicksand" onClick={() => setActiveSection("OTPVERIFICATION")}>
                Proceed to OTP
            </button>
        </div>
    );
};

export default Login;
