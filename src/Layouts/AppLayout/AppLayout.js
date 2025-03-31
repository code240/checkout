import React, { useContext } from "react";
import "./AppLayout.scss";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Coupons from "../../Components/Coupons/Coupons";
import Shipping from "../../Components/Shipping/Shipping";
import ShippingMethod from "../../Components/ShippingMethod/ShippingMethod";
import ContinueToPayment from "../../Components/ContinueToPayment/ContinueToPayment";
import Payments from "../../Popups/Payments/Payments";
import AddressSelection from "../../Popups/AddressSelection/AddressSelection";
import AddressFields from "../../Popups/AddressFields/AddressFields";
import Login from "../../Components/Login/Login";
import { AppContext } from "../../Contexts/AppProvider";
import Verification from "../../Components/Verification/Verification";
import CouponList from "../../Popups/CouponList/CouponList";

const AppLayout = (prop) => {
    const { activeSection } = useContext(AppContext);
    document.documentElement.style.setProperty(
        "--quick-primary-color",
        "#006bed"
    );
    document.documentElement.style.setProperty(
        "--quick-success-color",
        "#608d60"
    );

    return (
        <div className="Layout">
            <div className="sticky-to-top">
                <Header></Header>
                <Banner></Banner>
            </div>
            <OrderSummary></OrderSummary>
            <Coupons></Coupons>
            {activeSection === "LOGIN" ? <Login></Login> : null}
            {activeSection === "OTPVERIFICATION" ? <Verification></Verification> : null}
            {activeSection === "SHIPPING" ? (
                <>
                    <Shipping></Shipping>
                    <ShippingMethod></ShippingMethod>
                    <ContinueToPayment></ContinueToPayment>
                </>
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
