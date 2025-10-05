import React, { useContext } from "react";
import "./PaymentButtons.scss";
import { AppContext } from "../../Contexts/AppProvider";
import { amountInPaisa, openPopup, PrintCurrency } from "../../Helper/Helper";
import Constants from "../../Data/Constants";
import UpiPayment from "../UpiPayment/UpiPayment";
import { useNavigate, useParams } from "react-router-dom";
import { BasicContext } from "../../Contexts/BasicDataProvider";

const PaymentButtons = () => {
    const { addressSelectionPage, setActiveSection } = useContext(AppContext);
    const { seamlessPaymentMethods, total, currency, codAvailablity } = useContext(BasicContext);
    const { orderId, shopId } = useParams();
    const navigate = useNavigate();

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
                seamlessPaymentMethods?.map((ele, index) => {
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
                                <i className={ele?.icon}></i>&nbsp; {ele.title}
                            </span>
                            <span className="quicksand">
                                {PrintCurrency(currency)} {amountInPaisa(total)} <i className="bi bi-chevron-right"></i>
                            </span>
                        </button>
                    )
                })
            }

            {
                codAvailablity ? (
                    <button className="quicksand">
                        <span className="quicksand">
                            <i className="bi bi-cash"></i>&nbsp; Pay on Delivery
                        </span>
                        <span className="quicksand">
                            {PrintCurrency(currency)} {amountInPaisa(total)} <i className="bi bi-chevron-right"></i>
                        </span>
                    </button>
                ) : null
            }

        </div>
    );
};

export default PaymentButtons;
