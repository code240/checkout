import React, { useContext, useState } from "react";
import "./Payments.scss";
import { AppContext } from "../../Contexts/AppProvider";
import PopupHeader from "../../Components/PopupHeader/PopupHeader";
import Constants from "../../Data/Constants";
import UpiPayment from "../../Components/UpiPayment/UpiPayment";
import NetBankingPayment from "../../Components/NetBankingPayment/NetBankingPayment";

const Payments = () => {
    const { paymentsPage } = useContext(AppContext);
    const [selectedMethod, setSelectedMethod] = useState("NETBANKING");

    return (
        <div className="Payments" ref={paymentsPage}>
            <main>
                <div className="popup-sticky-header">
                    <PopupHeader page={paymentsPage}></PopupHeader>
                    <div class="shipping-banner">
                        <span class="quicksand">Shipping Charges added</span>
                        <span class="quicksand bold">
                            {Constants.INR} 50.00
                        </span>
                    </div>
                    <div class="total">
                        <span class="quicksand">Grand Total</span>
                        <span class="quicksand bold">
                            {Constants.INR} 212.05
                        </span>
                    </div>
                </div>
                <h6 className="quicksand main-heading">
                    Get extra 5% discount on prepaid orders.
                </h6>
                {selectedMethod === "NETBANKING" ? (
                    <>
                        <NetBankingPayment></NetBankingPayment>
                    </>
                ) : null}
                {selectedMethod === "WALLET" ? (
                    <>
                        <NetBankingPayment></NetBankingPayment>
                    </>
                ) : null}
                {selectedMethod === "CARDS" ? (
                    <>
                        <NetBankingPayment></NetBankingPayment>
                    </>
                ) : null}
                {selectedMethod === "" ? (
                    <div>
                        <UpiPayment></UpiPayment>
                        <div class="btn-wrap">
                            <button
                                className="payment-button"
                                onClick={() => setSelectedMethod("CARD")}
                            >
                                <span class="quicksand offer-text">
                                    Get 5% discount
                                </span>
                                <div class="left">
                                    <h6 className="quicksand">Pay Via Cards</h6>
                                    <h5 className="quicksand">INR 172.05</h5>
                                </div>
                                <div class="right">
                                    <div
                                        class="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.mastercard}')`,
                                        }}
                                    ></div>
                                    <div
                                        class="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.visa}')`,
                                        }}
                                    ></div>
                                    <div
                                        class="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.rupay}')`,
                                        }}
                                    ></div>
                                </div>
                            </button>
                            <button
                                className="payment-button"
                                onClick={() => setSelectedMethod("NETBANKING")}
                            >
                                <span class="quicksand offer-text">
                                    Get 5% discount
                                </span>
                                <div class="left">
                                    <h6 className="quicksand">
                                        Pay Via Netbanking
                                    </h6>
                                    <h5 className="quicksand">INR 172.05</h5>
                                </div>
                                <div class="right">
                                    <div
                                        class="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.axis}')`,
                                        }}
                                    ></div>
                                    <div
                                        class="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.kotak}')`,
                                        }}
                                    ></div>
                                    <div
                                        class="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.hdfc}')`,
                                        }}
                                    ></div>
                                </div>
                            </button>
                            <button
                                className="payment-button"
                                onClick={() => setSelectedMethod("WALLET")}
                            >
                                <span class="quicksand offer-text">
                                    Get 5% discount
                                </span>
                                <div class="left">
                                    <h6 className="quicksand">
                                        Pay Via Wallets
                                    </h6>
                                    <h5 className="quicksand">INR 172.05</h5>
                                </div>
                                <div class="right">
                                    <div
                                        class="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.paytm}')`,
                                        }}
                                    ></div>
                                    <div
                                        class="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.mobikwik}')`,
                                        }}
                                    ></div>
                                    <div
                                        class="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.phonepewallet}')`,
                                        }}
                                    ></div>
                                </div>
                            </button>
                            <button
                                className="payment-button"
                                onClick={() =>
                                    setSelectedMethod("CASHONDELIVERY")
                                }
                            >
                                <span class="quicksand offer-text">
                                    Get 5% discount
                                </span>
                                <div class="left">
                                    <h6 className="quicksand">
                                        Cash on delivery
                                    </h6>
                                    <h5 className="quicksand">INR 172.05</h5>
                                </div>
                                <div class="right">
                                    <div
                                        class="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.cod}')`,
                                        }}
                                    ></div>
                                </div>
                            </button>
                        </div>
                    </div>
                ) : null}
            </main>
        </div>
    );
};

export default Payments;
