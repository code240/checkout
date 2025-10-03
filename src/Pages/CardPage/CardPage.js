import React, { useContext } from "react";
import "./CardPage.scss";
import { AppContext } from "../../Contexts/AppProvider";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Coupons from "../../Components/Coupons/Coupons";
import LoginComponent from "../../Components/LoginComponent/LoginComponent";
import CardPayment from "../../Components/CardPayment/CardPayment";

const CardPage = () => {
    const { setActiveSection } = useContext(AppContext);
    return (
        <div className="CardPage">
            <OrderSummary></OrderSummary>
            <Coupons></Coupons>
            <CardPayment></CardPayment>
        </div>
    );
};

export default CardPage;
