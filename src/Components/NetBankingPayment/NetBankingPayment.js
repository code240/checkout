import React, { useState } from "react";
import "./NetBankingPayment.scss";

const NetBankingPayment = () => {
    return (
        <div className="UpiPayment">
            <div class="upi-section">
                <span class="quicksand offer-text">Get 5% discount</span>
                <div className="icons">
                    <div className="nb-card">
                        <div class="ico">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDjplJYoxWKpPmVvuh9WXqjhoRMHnWzF-JQ&s"
                                alt="phonepe"
                            />
                        </div>
                        <span className="quicksand bankName">State bank of India</span>
                    </div>

                    <div className="nb-card">
                        <div class="ico">
                            <img
                                src="https://companieslogo.com/img/orig/KOTAKBANK.NS-36440c5e.png?t=1720244492"
                                alt="phonepe"
                            />
                        </div>
                        <span className="quicksand bankName">Kotak mahindra bank</span>
                    </div>

                    <div className="nb-card">
                        <div class="ico">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgiz41maa34mpQoVYhRyZ8wk8XOMZfHvIrA&s"
                                alt="phonepe"
                            />
                        </div>
                        <span className="quicksand bankName">HDFC Bank</span>
                    </div>

                    <div className="nb-card">
                        <div class="ico">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RUF7zKsncgZOWviOIkmuuc3hsrCftRSvkQ&s"
                                alt="phonepe"
                            />
                        </div>
                        <span className="quicksand bankName">Axis Bank</span>
                    </div>

                    <div className="nb-card">
                        <div class="ico">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTm1ko2IGtHwamB_XjRCFxYDt9xDB2ePlyw&s"
                                alt="phonepe"
                            />
                        </div>
                        <span className="quicksand bankName">Canara Bank</span>
                    </div>



                    <div className="nb-card">
                        <div class="ico">
                            <img
                                src="https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-icon.png"
                                alt="phonepe"
                            />
                        </div>
                        <span className="quicksand bankName">Bank of baroda</span>
                    </div>

                </div>
                <hr className="upi-partition" />
                <div className="qr-with-upi">
                    <div className={"upi-input only-upi-field"}>
                        <input
                            type="text"
                            className="upi-input-field"
                            placeholder="my-upi-id@xyz"
                        />
                        <button className="upi-pay quicksand">Pay</button>
                    </div>
                </div>
                <hr className="upi-partition" />
                <div class="vpa-accounts">
                    <h6 class="quicksand vpa">Federal Bank</h6>
                    <h6 class="quicksand vpa">Union bank</h6>
                    <h6 class="quicksand vpa">Airtel Bank</h6>
                </div>
            </div>
        </div>
    );
};

export default NetBankingPayment;
