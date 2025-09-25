import React, { useContext, useEffect } from "react";
import "./AppLayout.scss";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Coupons from "../../Components/Coupons/Coupons";
import ShippingAddress from "../../Components/Shipping/ShippingAddress";
import ShippingMethod from "../../Components/ShippingMethod/ShippingMethod";
import ContinueToPayment from "../../Components/ContinueToPayment/ContinueToPayment";
import Payments from "../../Popups/Payments/Payments";
import AddressSelection from "../../Popups/AddressSelection/AddressSelection";
import AddressFields from "../../Popups/AddressFields/AddressFields";
import Login from "../../Components/Login/Login";
import { AppContext } from "../../Contexts/AppProvider";
import Verification from "../../Components/Verification/Verification";
import CouponList from "../../Popups/CouponList/CouponList";
import OrderSummary2 from "../../Components/OrderSummary2/OrderSummary2";
import { openPopup } from "../../Helper/Helper";
import PaymentButtons from "../../Components/PaymentButtons/PaymentButtons";

const AppLayout = (prop) => {
    const { activeSection, paymentsPage } = useContext(AppContext);



    document.documentElement.style.setProperty(
        "--quick-primary-color",
        "#c74919"
    );
    document.documentElement.style.setProperty(
        "--quick-font-color-on-primary",
        "#ffffff"
    );
    document.documentElement.style.setProperty(
        "--quick-success-color",
        "#608d60"
    );

    return (
        <div className="Layout">
            <div className="sticky-to-top">
                <Header></Header>
                {/* <Banner></Banner> */}
            </div>
            {/* <OrderSummary2></OrderSummary2> */}
            {/* <div className="seperator"></div> */}
            {activeSection === "LOGIN" ? <Login></Login> : null}
            {activeSection === "OTPVERIFICATION" ? <Verification></Verification> : null}
            {activeSection === "SHIPPING" ? (
                <div className="page-wrapper">
                    <OrderSummary></OrderSummary>
                    <Coupons></Coupons>
                    <ShippingAddress></ShippingAddress>
                    <ShippingMethod></ShippingMethod>
                    <PaymentButtons></PaymentButtons>
                    {/* <ContinueToPayment></ContinueToPayment> */}
                </div>
            ) : null}

            <div className="hiddens">
                <Payments></Payments>
                <AddressSelection></AddressSelection>
                <CouponList></CouponList>
                <AddressFields></AddressFields>
            </div>
        </div>
    );
};

export default AppLayout;
