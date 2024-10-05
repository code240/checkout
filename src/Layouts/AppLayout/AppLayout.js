import React from 'react';
import './AppLayout.scss';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import Coupons from '../../Components/Coupons/Coupons';
import Shipping from '../../Components/Shipping/Shipping';
import ShippingMethod from '../../Components/ShippingMethod/ShippingMethod';
import ContinueToPayment from '../../Components/ContinueToPayment/ContinueToPayment';

const AppLayout = (prop) => {
    return (
        <div className='Layout'>
            <div className='sticky-to-top'>
                <Header></Header>
                <Banner></Banner>
            </div>
            <OrderSummary></OrderSummary>
            <Coupons></Coupons>
            <Shipping></Shipping>
            <ShippingMethod></ShippingMethod>
            <ContinueToPayment></ContinueToPayment>
            {/* <main>
                <Outlet />
            </main> */}
            {/* <footer></footer> */}
        </div>
    )
}

export default AppLayout;