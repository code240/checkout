import React, { useContext, useEffect, useState } from "react";
import "./LoadingLayout.scss";
import Constants, { LoadingHeadings } from "../../Data/Constants";
import { useLocation, useNavigate } from "react-router-dom";
import Api from "../../Helper/Api";
import { AppContext } from "../../Contexts/AppProvider";
import { BasicContext } from "../../Contexts/BasicDataProvider";

const LoadingLayout = () => {

    const {  } = useContext(AppContext);
    const { order, setOrder, items, setItems } = useContext(BasicContext);
    const [currentLoadingText, setCurrentLoadingText] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const [receivedShopId, setReceivedShopId] = useState("empty");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLoadingText((prev) => (prev + 1) % LoadingHeadings.length);
        }, 750);

        // cleanup interval on unmount
        return () => clearInterval(interval);
    }, [LoadingHeadings.length]);

    useEffect(() => {
        CreateCheckout();
    }, []);

    const CreateCheckout = async () => {
        const queryString = location.search;
        const params = new URLSearchParams(window.location.search);
        const data = Object.fromEntries(params.entries());
        let shopId = (data?.shop)?.replaceAll(".myshopify.com", ""); 
        console.log(queryString);
        setReceivedShopId(shopId);
        
        const response = await Api.get(
            `${shopId}/api/checkout/redirect${queryString}`
        );

        if (response?.data?.status === true) {
            let orderId = response.data.data.order.RandomId ?? "";
             
            setOrder(response.data.data.order ?? {});
            setItems(response.data.data.items ?? []);
            console.log(response.data.data.items);
            setItems(response.data.data.items);

            navigate("/"+ shopId +"/"+orderId+ "/checkout")
        } else {
            navigate("/error")
        }
        
    }

    return (
        <div className="LoadingLayout">
            <header className="header">
                <div className='brand-logo'>
                    <img src={`https://cdn.paytring.com/logo/quick/${receivedShopId}.png`} alt='brand'></img>
                </div>
            </header>
            <div className="loader-with-text">
                <div className="loader-icon">
                    <div className="border-spinner"></div>
                    <img src={Constants.images.public.loader2} alt="loader" />
                </div>
                <h6 className="quicksand">
                    {LoadingHeadings[currentLoadingText]}
                </h6>

            </div>
            <footer className="footer-div">
                <div className="footer-logo">
                    <img src="https://paytring.com/_next/static/media/Main%20LOGO.1bf318d5.png"></img>
                </div>
            </footer>
        </div>
    );
};

export default LoadingLayout;
