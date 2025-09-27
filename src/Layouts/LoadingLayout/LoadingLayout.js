import React, { useEffect, useState } from "react";
import "./LoadingLayout.scss";
import Constants from "../../Data/Constants";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";

const LoadingLayout = () => {
    const [currentLoadingText, setCurrentLoadingText] = useState(0);
    const navigate = useNavigate();
    const headings = [
        "Preparing your checkout experience...",
        "Almost there, setting things up...",
        "Fetching the best deals for you...",
        "Just a moment while we get everything ready...",
        "Optimizing your cart for a smooth checkout...",
        "Securing your payment gateway...",
        "Wrapping up the final details...",
        "Hang tight—your order is about to be placed!"
    ];
    useEffect(() => {
        setTimeout(() => {
            navigate("/login")
        },2500)
    })
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLoadingText((prev) => (prev + 1) % headings.length);
        }, 750);

        // cleanup interval on unmount
        return () => clearInterval(interval);
    }, [headings.length]);

    return (
        <div className="LoadingLayout">
            <header className="header">
                <div className='brand-logo'>
                    <img src='https://store.jiva.com/cdn/shop/files/Jiva-Ayurveda-TM-LOgo-new_large.png' alt='brand'></img>
                </div>
            </header>
            <div className="loader-with-text">
                <div className="loader-icon">
                    <div className="border-spinner"></div>
                    <img src={Constants.images.public.loader2} alt="loader" />
                </div>
                <h6 className="quicksand">
                    {headings[currentLoadingText]}
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
