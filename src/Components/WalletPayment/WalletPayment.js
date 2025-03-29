import React, { useState } from "react";
import "./WalletPayment.scss";

const WalletPayment = ({setSelectedMethod}) => {
    return (
        <div className="WalletPayment">
            <h6 className="quicksand back-icon" onClick={() => setSelectedMethod("")}>
                <i className="bi bi-arrow-left-short"></i> Pay via wallet
            </h6>
            <div className="upi-section">
                <span className="quicksand offer-text">Get 5% discount</span>
                <div className="icons">
                    <div className="nb-card" onClick={() => setSelectedMethod("")}>
                        <div className="ico">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDjplJYoxWKpPmVvuh9WXqjhoRMHnWzF-JQ&s"
                                alt="phonepe"
                            />
                        </div>
                        <span className="quicksand bankName text-truncate">State bank of India</span>
                    </div>

                    <div className="nb-card">
                        <div className="ico">
                            <img
                                src="https://companieslogo.com/img/orig/KOTAKBANK.NS-36440c5e.png?t=1720244492"
                                alt="phonepe"
                            />
                        </div>
                        <span className="quicksand bankName text-truncate">Kotak mahindra bank</span>
                    </div>

                    <div className="nb-card">
                        <div className="ico">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgiz41maa34mpQoVYhRyZ8wk8XOMZfHvIrA&s"
                                alt="phonepe"
                            />
                        </div>
                        <span className="quicksand bankName text-truncate">HDFC Bank</span>
                    </div>

                    <div className="nb-card">
                        <div className="ico">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RUF7zKsncgZOWviOIkmuuc3hsrCftRSvkQ&s"
                                alt="phonepe"
                            />
                        </div>
                        <span className="quicksand bankName text-truncate">Axis Bank</span>
                    </div>

                    <div className="nb-card">
                        <div className="ico">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTm1ko2IGtHwamB_XjRCFxYDt9xDB2ePlyw&s"
                                alt="phonepe"
                            />
                        </div>
                        <span className="quicksand bankName text-truncate">Canara Bank</span>
                    </div>
                </div>
            </div>
            <h6 className="back-option quicksand" onClick={() => setSelectedMethod("")}>
                <i className="bi bi-arrow-90deg-left"></i> Back to payment options
            </h6>
        </div>
    );
};

export default WalletPayment;
