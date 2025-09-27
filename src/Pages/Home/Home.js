
import React, { useContext, useEffect } from 'react'
import './Home.scss';
import { AppContext } from '../../Contexts/AppProvider';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import Coupons from '../../Components/Coupons/Coupons';
import ShippingAddress from '../../Components/Shipping/ShippingAddress';
import ShippingMethod from '../../Components/ShippingMethod/ShippingMethod';
import PaymentButtons from '../../Components/PaymentButtons/PaymentButtons';
import Api from '../../Helper/Api';
import { useParams } from 'react-router-dom';

const Home = () => {
    const { name, setItems } = useContext(AppContext);
    const { orderId, shopId } = useParams();
    useEffect(() => {
        GetCheckoutData()
    })

    const GetCheckoutData = async () => {
        const response = await Api.post(
            `${shopId}/api/checkout/get/${orderId}`
        );

        if (response?.data?.status === true) {
            let checkout = response.data;
            console.log(checkout);
            setItems(checkout.data.items)
            console.log(checkout.data.items);
            
        }
    }

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