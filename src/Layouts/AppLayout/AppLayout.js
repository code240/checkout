import React from 'react';
import './AppLayout.scss';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import Coupons from '../../Components/Coupons/Coupons';
import Shipping from '../../Components/Shipping/Shipping';
import ShippingMethod from '../../Components/ShippingMethod/ShippingMethod';
import ContinueToPayment from '../../Components/ContinueToPayment/ContinueToPayment';
import Payments from '../../Popups/Payments/Payments';
import AddressSelection from '../../Popups/AddressSelection/AddressSelection';
import AddressFields from '../../Popups/AddressFields/AddressFields';

const AppLayout = (prop) => {
    document.documentElement.style.setProperty("--quick-primary-color", "#006bed");
    document.documentElement.style.setProperty("--quick-success-color", "#608d60");

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

            <div className="hiddens">
                <Payments></Payments>
                <AddressSelection></AddressSelection>
                <AddressFields></AddressFields>
            </div>
        </div>
    )
}

export default AppLayout;