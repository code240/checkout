import React, { useContext, useState } from "react";
import "./WalletPayment.scss";
import { useNavigate, useParams } from "react-router-dom";
import { BasicContext } from "../../Contexts/BasicDataProvider";

const WalletPayment = () => {
    const navigate = useNavigate();
    const { wallets } = useContext(BasicContext);
    const { orderId, shopId } = useParams();

    const goBack = () => {
        navigate(`/${shopId}/${orderId}/checkout`)
    }

    return (
        <div className="WalletPayment">
            <h6 className="quicksand back-icon" onClick={() => goBack()}>
                <i className="bi bi-arrow-left"></i> Pay via wallet
            </h6>
            <div className="upi-section">
                <span className="quicksand offer-text">Get 5% discount</span>
                <div className="icons">

                    {
                        wallets.map((ele, eleKey) => {
                            return (
                                <div className="nb-card" key={eleKey}>
                                    <div className="ico">
                                        <img
                                            src={ele?.image}
                                            alt={ele?.code}
                                        />
                                    </div>
                                    <span className="quicksand bankName text-truncate">{ele?.title}</span>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <h6 className="back-option quicksand" onClick={() => goBack()}>
                <i className="bi bi-arrow-90deg-left"></i> Back to payment options
            </h6>
        </div>
    );
};

export default WalletPayment;
