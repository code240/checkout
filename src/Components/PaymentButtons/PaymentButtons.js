import React, { useContext } from "react";
import "./PaymentButtons.scss";
import { AppContext } from "../../Contexts/AppProvider";
import { openPopup } from "../../Helper/Helper";
import Constants from "../../Data/Constants";
import UpiPayment from "../UpiPayment/UpiPayment";
import { useNavigate, useParams } from "react-router-dom";

const PaymentButtons = () => {
    const { addressSelectionPage, setActiveSection } = useContext(AppContext);
    const { orderId, shopId } = useParams();
    const navigate = useNavigate();
    
    const buttons = [
        {
            title: "UPI",
            icon: "bi bi-collection-play",
            code: 'upi'
        },
        {
            title: "Cards",
            icon: "bi bi-credit-card",
            code: 'cards'
        },
        {
            title: "Wallet",
            icon: "bi bi-wallet2",
            code: 'wallet'
        }, 
        {
            title: "Netbanking",
            icon: "bi bi-bank",
            code: 'netbanking'
        },
        {
            title: "Cash on delivery",
            icon: "bi bi-cash",
            code: 'cod'
        }
    ]

    const navigateToPaymentPage = (method) => {
        if (method == "cards") {
            navigate(`/${shopId}/${orderId}/checkout/card`)
        }
        if (method == "netbanking") {
            navigate(`/${shopId}/${orderId}/checkout/netbanking`)
        }
        if (method == "wallet") {
            navigate(`/${shopId}/${orderId}/checkout/wallet`)
        }
       
    }
    return (
        <div className="PaymentButtons">
            {
                buttons?.map((ele, index) => {
                    if (ele.code == "upi") {
                        return (
                            <div className="upi-div" key={index}>
                                <UpiPayment></UpiPayment>
                            </div>
                        )
                    }
                    return (
                        <button className="quicksand" key={index} onClick={() => navigateToPaymentPage(ele?.code)}>
                            <span className="quicksand">
                               <i className={ele?.icon}></i>&nbsp; { ele.title }
                            </span>
                            <span className="quicksand">
                                {Constants.INR} 172.05 <i className="bi bi-chevron-right"></i>
                            </span>

                        </button>
                    )
                })
            }

        </div>
    );
};

export default PaymentButtons;
