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
import { Outlet, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Api from "../../Helper/Api";
import BackButton from "../../Popups/BackButton/BackButton";
import { BasicContext } from "../../Contexts/BasicDataProvider";
import { Button, Message, toaster, useToaster } from 'rsuite';
import { GetToken } from "../../Helper/Storage";


const AppLayout = (props) => {
    const { activeSection, paymentsPage } = useContext(AppContext);
    const { setItems, setUserLatestAdderess, setShopLogo, setShopId, setIsCheckoutCreated, setShopName, setInstalledApps, HandleInstalledApps, UpdateOrder, GetMethods, setDiscountCode, setDiscountAmount, setSubtotal, setTotal, setShippingCharges, setTaxTotal, setTaxType, setCurrency } = useContext(BasicContext);
    const { orderId, shopId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        GetCheckoutData()
    }, [])


    const GetCheckoutData = async () => {
        document.documentElement.style.setProperty(
            "--quick-primary-color",
            "#cccccc"
        );
        const response = await Api.post(
            `${shopId}/api/checkout/get/${orderId}`
        );

        if (response?.data?.status === true) {
            let checkout = response.data;
            setIsCheckoutCreated(true);
            setItems(checkout.data.items)
            setTotal(checkout.data.order.total)
            setTaxTotal(checkout.data.order.tax)
            setTaxType(checkout.data.order.taxType)
            setShippingCharges(0)
            setSubtotal(checkout.data.order.subtotal)
            setDiscountAmount(checkout.data.order.discountAmount)
            setDiscountCode(checkout.data.order.discountCode)
            setCurrency(checkout.data.currency)
            setUserLatestAdderess(checkout.data?.userAddress ?? {})
            setInstalledApps(checkout.data?.apps);
            HandleInstalledApps(checkout.data?.apps ?? [], shopId, orderId);
            console.log(checkout.data.apps);
            setShopId(checkout.data.shop.shop_id);
            setShopLogo(checkout.data.shop.shop_logo);
            setShopName(checkout.data.shop.shop_name);

            document.documentElement.style.setProperty(
                "--quick-primary-color",
                checkout.data.colors.primary
            );
            document.documentElement.style.setProperty(
                "--quick-primary-light-color",
                checkout.data.colors.primary_light
            );

            
            
            if (checkout.data?.userAddress?.address_ref_id) {
                UpdateOrder(checkout.data.userAddress.address_ref_id, shopId, orderId);
            } else {
                if (GetToken()) {
                    navigate(`/${shopId}/${orderId}/checkout/address`)
                }
            }
        }
    }


    document.documentElement.style.setProperty(
        "--quick-font-color-on-primary",
        "#ffffff"
    );
    document.documentElement.style.setProperty(
        "--quick-success-color",
        "#44a144"
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
