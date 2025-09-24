import React, { useContext } from "react";
import "./PaymentButtons.scss";
import { AppContext } from "../../Contexts/AppProvider";
import { openPopup } from "../../Helper/Helper";
import Constants from "../../Data/Constants";

const PaymentButtons = () => {
    const { addressSelectionPage, setActiveSection } = useContext(AppContext);
    const buttons = [
        {
            title: "UPI",
            icon: "bi bi-collection-play",
        },
        {
            title: "Cards",
            icon: "bi bi-credit-card",
        },
        {
            title: "Wallet",
            icon: "bi bi-wallet2",
        }, 
        {
            title: "Netbanking",
            icon: "bi bi-bank",
        }
    ]
    return (
        <div className="PaymentButtons">
            {
                buttons?.map((ele, index) => {
                    return (
                        <button className="quicksand" key={index}>
                            <span className="quicksand">
                               <i className={ele?.icon}></i>&nbsp; { ele.title }
                            </span>
                            <span className="quicksand">
                                {Constants.INR} 172.05
                            </span>

                        </button>
                    )
                })
            }

        </div>
    );
};

export default PaymentButtons;
