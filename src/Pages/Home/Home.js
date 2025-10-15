
import React, { useContext, useEffect } from 'react'
import './Home.scss';
import { AppContext } from '../../Contexts/AppProvider';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import Coupons from '../../Components/Coupons/Coupons';
import ShippingAddress from '../../Components/Shipping/ShippingAddress';
import ShippingMethod from '../../Components/ShippingMethod/ShippingMethod';
import PaymentButtons from '../../Components/PaymentButtons/PaymentButtons';
import Api from '../../Helper/Api';
import { useNavigate, useParams } from 'react-router-dom';
import { GetToken } from '../../Helper/Storage';
import { BasicContext } from '../../Contexts/BasicDataProvider';
import { openPopup } from '../../Helper/Helper';

const Home = () => {
    const navigate = useNavigate();
    const { orderId, shopId } = useParams();
    const { isCheckoutCreated, userLatestAdderess } = useContext(BasicContext);
    const { backButtonRef, setExitPopupClosed } = useContext(AppContext);

    useEffect(() => {
        if (!GetToken()) {
            navigate(`/${shopId}/${orderId}/login`)
        }
        if (isCheckoutCreated && !userLatestAdderess?.address_ref_id) {
            navigate(`/${shopId}/${orderId}/checkout/address`);
        }
    }, [])
    const handlePopState = (event) => {
    };

    useEffect(() => {
        window.history.pushState(null, "", window.location.href);

        const handlePopState = (event) => {
            event.preventDefault();
            console.log("Back button pressed in iframe!");
            openPopup(backButtonRef);
            setExitPopupClosed(false);
            window.history.pushState(null, "", window.location.href);
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    return (
        <div className='Home'>
            <OrderSummary></OrderSummary>
            <Coupons></Coupons>
            <ShippingAddress></ShippingAddress>
            <ShippingMethod></ShippingMethod>
            <PaymentButtons></PaymentButtons>
        </div>
    )
}

export default Home;