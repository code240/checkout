import React, { useContext } from "react";
import "./NetBankingPayment.scss";
import { useNavigate, useParams } from "react-router-dom";
import { BasicContext } from "../../Contexts/BasicDataProvider";

const NetBankingPayment = ({ setSelectedMethod }) => {
    const navigate = useNavigate();
    const { netbankingBanks, favBanks, bankShortcuts } = useContext(BasicContext);
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

                    {
                        favBanks?.map((el, elKey) => {
                            return (
                                <div className="nb-card" key={elKey}>
                                    <div className="ico">
                                        <img
                                            src={ el.image }
                                            alt="phonepe"
                                        />
                                    </div>
                                    <span className="quicksand bankName text-truncate">{ el.title }</span>
                                </div>
                            )
                        })
                    }


                </div>
                <hr className="upi-partition" />
                <div className="qr-with-upi">
                    <div className={"upi-input only-upi-field"}>
                        <select
                            type="text"
                            className="upi-input-field"
                            placeholder="my-upi-id@xyz"
                        >
                            {
                                netbankingBanks?.map((ele, ind) => {
                                    return (
                                        <option value={ele?.code} key={ind}>{ele?.title}</option>
                                    )
                                })
                            }
                            <option value="">Bank of India</option>
                            <option value="">IDBI Bank</option>
                            <option value="">Jio payments Bank</option>
                        </select>
                        <button className="upi-pay quicksand">Pay</button>
                    </div>
                </div>
                <hr className="upi-partition" />
                <div className="vpa-accounts">
                    {
                        bankShortcuts?.map((el, elKey) => {
                            return (
                                <h6 className="quicksand vpa" key={elKey}>{el?.title}</h6>
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

export default NetBankingPayment;
