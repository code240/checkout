import React, { useContext } from "react";
import "./LoginPage.scss";
import { AppContext } from "../../Contexts/AppProvider";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Coupons from "../../Components/Coupons/Coupons";
import LoginComponent from "../../Components/LoginComponent/LoginComponent";

const LoginPage = () => {
    const { setActiveSection } = useContext(AppContext);
    return (
        <div className="LoginPage">

            <OrderSummary></OrderSummary>
            <Coupons></Coupons>
            <LoginComponent></LoginComponent>
           
        </div>
    );
};

export default LoginPage;
