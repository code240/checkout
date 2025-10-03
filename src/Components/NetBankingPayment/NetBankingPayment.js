import React from "react";
import "./NetBankingPayment.scss";
import { useNavigate, useParams } from "react-router-dom";

const NetBankingPayment = ({setSelectedMethod}) => {
    const navigate = useNavigate();
    const { orderId, shopId } = useParams();

    const goBack = () => {
        navigate(`/${shopId}/${orderId}/checkout`)
    }
    return (
        <div className="NetBankingPayment">
            <h6 className="quicksand back-icon" onClick={() => goBack()}>
                <i className="bi bi-arrow-left"></i> Pay via netbanking
            </h6>
            <div className="upi-section">
                <span className="quicksand offer-text">Get 5% discount</span>
                <div className="icons">
                    <div className="nb-card">
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



                    <div className="nb-card">
                        <div className="ico">
                            <img
                                src="https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-icon.png"
                                alt="phonepe"
                            />
                        </div>
                        <span className="quicksand bankName text-truncate">Bank of baroda</span>
                    </div>

                </div>
                <hr className="upi-partition" />
                <div className="qr-with-upi">
                    <div className={"upi-input only-upi-field"}>
                        <select
                            type="text"
                            className="upi-input-field"
                            placeholder="my-upi-id@xyz"
                        >
                            <option value="">Punjab National Bank</option>
                            <option value="">Bank of India</option>
                            <option value="">IDBI Bank</option>
                            <option value="">Jio payments Bank</option>
                        </select>
                        <button className="upi-pay quicksand">Pay</button>
                    </div>
                </div>
                <hr className="upi-partition" />
                <div className="vpa-accounts">
                    <h6 className="quicksand vpa">Federal Bank</h6>
                    <h6 className="quicksand vpa">Union bank</h6>
                    <h6 className="quicksand vpa">Airtel Bank</h6>
                    <h6 className="quicksand vpa">Punjab National Bank</h6>
                </div>
            </div>
            <h6 className="back-option quicksand" onClick={() => goBack()}>
                <i className="bi bi-arrow-90deg-left"></i> Back to payment options
            </h6>
        </div>
    );
};

export default NetBankingPayment;
