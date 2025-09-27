import React, { useContext } from "react";
import "./VerificationPage.scss";
import { AppContext } from "../../Contexts/AppProvider";
import VerificationComponent from "../../Components/VerificationComponent/VerificationComponent";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Coupons from "../../Components/Coupons/Coupons";

const VerificationPage = () => {
    const { setActiveSection } = useContext(AppContext);
    return (
        <div className="VerificationPage">
            <OrderSummary></OrderSummary>
            <Coupons></Coupons>
            <VerificationComponent></VerificationComponent>
        </div>
    );
};

export default VerificationPage;
