import React, { useContext } from "react";
import "./ErrorPage.scss";
import { AppContext } from "../../Contexts/AppProvider";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Coupons from "../../Components/Coupons/Coupons";
import LoginComponent from "../../Components/LoginComponent/LoginComponent";

const ErrorPage = () => {
    const { setActiveSection } = useContext(AppContext);
    return (
        <div className="ErrorPage">
            Sorry.. Koi takniki kharabi aagyi hai...
        </div>
    );
};

export default ErrorPage;
