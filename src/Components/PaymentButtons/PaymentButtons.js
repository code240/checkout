import React, { useContext } from "react";
import "./PaymentButtons.scss";
import { AppContext } from "../../Contexts/AppProvider";
import { openPopup } from "../../Helper/Helper";
import Constants from "../../Data/Constants";
import UpiPayment from "../UpiPayment/UpiPayment";

const PaymentButtons = () => {
    const { addressSelectionPage, setActiveSection } = useContext(AppContext);
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
