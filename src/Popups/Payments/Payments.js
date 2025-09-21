import React, { useContext, useState } from "react";
import "./Payments.scss";
import { AppContext } from "../../Contexts/AppProvider";
import PopupHeader from "../../Components/PopupHeader/PopupHeader";
import Constants from "../../Data/Constants";
import UpiPayment from "../../Components/UpiPayment/UpiPayment";
import NetBankingPayment from "../../Components/NetBankingPayment/NetBankingPayment";
import WalletPayment from "../../Components/WalletPayment/WalletPayment";
import CardPayment from "../../Components/CardPayment/CardPayment";
import { closePopup } from "../../Helper/Helper";

// 👇 ADD
import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";

const Payments = () => {
    const { paymentsPage, paymentPopupClosed, setPaymentPopupClosed } = useContext(AppContext);
    const [selectedMethod, setSelectedMethod] = useState("");
    const [{ y }, api] = useSpring(() => ({ y: 0 }));


    const hideDrawer = () => {
        api.start({
            y: window.innerHeight,
            config: { duration: 300 },
            onRest: () => {
                setPaymentPopupClosed(true);
                closePopup && closePopup(paymentsPage);
                console.log("DEMOOOO");

            },
        });
    };

    const bind = useDrag(
        ({ down, movement: [, my], velocity: [, vy], direction: [, dy] }) => {
            // if drawer is closed then ignore drag
            if (paymentPopupClosed) return;

            if (down) {
                // only allow drag to bottom + resistance
                api.start({ y: my > 0 ? my / 1.2 : 0, immediate: true });
            } else {
                // release: close or snap back
                if (my > 150 || (vy > 1 && dy > 0)) {
                    hideDrawer();
                } else {
                    api.start({ y: 0, config: { duration: 300 } });
                }
            }
        },
        { axis: "y" }
    );

    return (
        <animated.div
            className="Payments"
            ref={paymentsPage}
            style={{ transform: y.to((val) => `translateY(${val}px)`) }}
        >
            <main>
                {/* ---- HEADER AREA DRAGGABLE ---- */}
                <animated.div
                    className="popup-sticky-header"
                    {...bind()}
                    style={{ touchAction: "none", cursor: "grab" }}
                >
                    <PopupHeader page={paymentsPage} />
                    <div className="shipping-banner">
                        <span className="quicksand">Shipping Charges added</span>
                        <span className="quicksand bold">{Constants.INR} 50.00</span>
                    </div>
                    <div className="total">
                        <span className="quicksand">Grand Total</span>
                        <span className="quicksand bold">{Constants.INR} 212.05</span>
                    </div>
                </animated.div>
                {/* --------------------------------- */}

                <h6 className="quicksand main-heading">
                    Get extra 5% discount on prepaid orders.
                </h6>

                {selectedMethod === "NETBANKING" && (
                    <NetBankingPayment setSelectedMethod={setSelectedMethod} />
                )}
                {selectedMethod === "WALLET" && (
                    <WalletPayment setSelectedMethod={setSelectedMethod} />
                )}
                {selectedMethod === "CARDS" && (
                    <CardPayment setSelectedMethod={setSelectedMethod} />
                )}

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
        </animated.div>
    );
};

export default Payments;
