import React, { useContext, useEffect } from "react";
import "./NetbankingPage.scss";
import { AppContext } from "../../Contexts/AppProvider";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Coupons from "../../Components/Coupons/Coupons";
import LoginComponent from "../../Components/LoginComponent/LoginComponent";
import NetBankingPayment from "../../Components/NetBankingPayment/NetBankingPayment";
import { useLocation } from "react-router-dom";

const NetbankingPage = () => {
    const { setActiveSection } = useContext(AppContext);

    return (
        <div className="NetbankingPage">

            <OrderSummary></OrderSummary>
            <Coupons></Coupons>
            <NetBankingPayment></NetBankingPayment>
        </div>
    );
};

export default NetbankingPage;
