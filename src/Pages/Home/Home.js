
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

const Home = () => {
    const navigate = useNavigate();
    const { orderId, shopId } = useParams();
    const { isCheckoutCreated, userLatestAdderess, FetchAddress } = useContext(BasicContext);

    useEffect(() => {
        if (!GetToken()) {
            navigate(`/${shopId}/${orderId}/login`)
        }
        if (isCheckoutCreated && !userLatestAdderess?.address_ref_id) {
            navigate(`/${shopId}/${orderId}/checkout/address`);
        }
    },[])

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