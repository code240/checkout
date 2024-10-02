import React from 'react';
import './AppLayout.scss';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';

const AppLayout = (prop) => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <OrderSummary></OrderSummary>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </div>
    )
}

export default AppLayout;