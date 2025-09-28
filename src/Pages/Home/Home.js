
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

const Home = () => {
    const navigate = useNavigate();
    const { orderId, shopId } = useParams();

    useEffect(() => {
        if (!GetToken()) {
            navigate(`/${shopId}/${orderId}/login`)
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