import React, { useContext, useState } from "react";
import "./Payments.scss";
import { AppContext } from "../../Contexts/AppProvider";
import PopupHeader from "../../Components/PopupHeader/PopupHeader";
import Constants from "../../Data/Constants";
import UpiPayment from "../../Components/UpiPayment/UpiPayment";
import NetBankingPayment from "../../Components/NetBankingPayment/NetBankingPayment";
import WalletPayment from "../../Components/WalletPayment/WalletPayment";
import CardPayment from "../../Components/CardPayment/CardPayment";
import { useSwipeDown } from "../../Helper/Helper";


const Payments = () => {
    const { paymentsPage } = useContext(AppContext);
    const [selectedMethod, setSelectedMethod] = useState("");

    const handleSwipeDown = () => {
        alert("Top to Bottom Swipe Detected!");
    };

    useSwipeDown(handleSwipeDown);

    return (
        <div className="Payments" ref={paymentsPage}>
            <main>
                <div className="popup-sticky-header">
                    <PopupHeader page={paymentsPage}></PopupHeader>
                    <div className="shipping-banner">
                        <span className="quicksand">Shipping Charges added</span>
                        <span className="quicksand bold">
                            {Constants.INR} 50.00
                        </span>
                    </div>
                    <div className="total">
                        <span className="quicksand">Grand Total</span>
                        <span className="quicksand bold">
                            {Constants.INR} 212.05
                        </span>
                    </div>
                </div>
                <h6 className="quicksand main-heading">
                    Get extra 5% discount on prepaid orders.
                </h6>
                {selectedMethod === "NETBANKING" ? (
                    <>
                        <NetBankingPayment setSelectedMethod={setSelectedMethod}></NetBankingPayment>
                    </>
                ) : null}
                {selectedMethod === "WALLET" ? (
                    <>
                    <WalletPayment setSelectedMethod={setSelectedMethod}></WalletPayment>
                    </>
                ) : null}
                {selectedMethod === "CARDS" ? (
                    <>
                        <CardPayment setSelectedMethod={setSelectedMethod}></CardPayment>
                    </>
                ) : null}
                {selectedMethod === "" ? (
                    <div>
                        <UpiPayment></UpiPayment>
                        <div className="btn-wrap">
                            <button
                                className="payment-button"
                                onClick={() => setSelectedMethod("CARDS")}
                            >
                                <span className="quicksand offer-text">
                                    Get 5% discount
                                </span>
                                <div className="left">
                                    <h6 className="quicksand">Pay Via Cards</h6>
                                    <h5 className="quicksand">INR 172.05</h5>
                                </div>
                                <div className="right">
                                    <div
                                        className="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.mastercard}')`,
                                        }}
                                    ></div>
                                    <div
                                        className="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.visa}')`,
                                        }}
                                    ></div>
                                    <div
                                        className="icon1"
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
                                <span className="quicksand offer-text">
                                    Get 5% discount
                                </span>
                                <div className="left">
                                    <h6 className="quicksand">
                                        Pay Via Netbanking
                                    </h6>
                                    <h5 className="quicksand">INR 172.05</h5>
                                </div>
                                <div className="right">
                                    <div
                                        className="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.axis}')`,
                                        }}
                                    ></div>
                                    <div
                                        className="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.kotak}')`,
                                        }}
                                    ></div>
                                    <div
                                        className="icon1"
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
                                <span className="quicksand offer-text">
                                    Get 5% discount
                                </span>
                                <div className="left">
                                    <h6 className="quicksand">
                                        Pay Via Wallets
                                    </h6>
                                    <h5 className="quicksand">INR 172.05</h5>
                                </div>
                                <div className="right">
                                    <div
                                        className="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.paytm}')`,
                                        }}
                                    ></div>
                                    <div
                                        className="icon1"
                                        style={{
                                            backgroundImage: `url('${Constants.images.public.mobikwik}')`,
                                        }}
                                    ></div>
                                    <div
                                        className="icon1"
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
                                <span className="quicksand offer-text">
                                    Get 5% discount
                                </span>
                                <div className="left">
                                    <h6 className="quicksand">
                                        Cash on delivery
                                    </h6>
                                    <h5 className="quicksand">INR 172.05</h5>
                                </div>
                                <div className="right">
                                    <div
                                        className="icon1"
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
