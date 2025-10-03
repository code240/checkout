import React, { useContext } from "react";
import "./WalletPage.scss";
import { AppContext } from "../../Contexts/AppProvider";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Coupons from "../../Components/Coupons/Coupons";
import LoginComponent from "../../Components/LoginComponent/LoginComponent";
import WalletPayment from "../../Components/WalletPayment/WalletPayment";

const WalletPage = () => {
    const { setActiveSection } = useContext(AppContext);
    return (
        <div className="WalletPage">

            <OrderSummary></OrderSummary>
            <Coupons></Coupons>
            <WalletPayment></WalletPayment>
        </div>
    );
};

export default WalletPage;
