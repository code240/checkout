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
import { AppContext } from "../../Contexts/AppProvider";
import CouponList from "../../Popups/CouponList/CouponList";
import OrderSummary2 from "../../Components/OrderSummary2/OrderSummary2";
import { openPopup } from "../../Helper/Helper";
import PaymentButtons from "../../Components/PaymentButtons/PaymentButtons";
import { Outlet } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Api from "../../Helper/Api";
import BackButton from "../../Popups/BackButton/BackButton";
import { BasicContext } from "../../Contexts/BasicDataProvider";

const AppLayout = (props) => {
    const { activeSection, paymentsPage} = useContext(AppContext);
    const {  name, setItems, setSubtotal,setTotal, setShippingCharges, setTaxTotal, setTaxType, setCurrency } = useContext(BasicContext);

    const { orderId, shopId } = useParams();
    useEffect(() => {
        GetCheckoutData()
    },[])
    const GetCheckoutData = async () => {
        const response = await Api.post(
            `${shopId}/api/checkout/get/${orderId}`
        );

        if (response?.data?.status === true) {
            let checkout = response.data;
            console.log(checkout);
            setItems(checkout.data.items)
            setTotal(checkout.data.total)
            console.log(checkout.data.items);
        }
    }

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
                <Banner></Banner>
            </div>
            {activeSection === "SHIPPING" ? (
                <div className="page-wrapper">
                    <Outlet />
                </div>
            ) : null}

            <div className="hiddens">
                <AddressSelection></AddressSelection>
                <CouponList></CouponList>
                <BackButton></BackButton>
            </div>
        </div>
    );
};

export default AppLayout;
