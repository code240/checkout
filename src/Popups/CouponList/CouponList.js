import React, { useContext } from "react";
import "./CouponList.scss";
import { AppContext } from "../../Contexts/AppProvider";
import PopupHeader from "../../Components/PopupHeader/PopupHeader";
import Constants from "../../Data/Constants";
import { amountInPaisa, closePopup, openPopup, PrintCurrency } from "../../Helper/Helper";
import { BasicContext } from "../../Contexts/BasicDataProvider";

const CouponList = () => {
    const { couponListRef } = useContext(AppContext);
    const { total, currency } = useContext(BasicContext);


    return (
        <div className="CouponList" ref={couponListRef}>
            <main>
                <div className="popup-sticky-header">
                    <PopupHeader page={couponListRef}></PopupHeader>
                    <div className="total">
                        <span className="quicksand">Grand Total</span>
                        <span className="quicksand bold">
                            { PrintCurrency(currency) } { amountInPaisa(total) }
                        </span>
                    </div>

                </div>
                <h6 className="quicksand main-heading">
                    Coupon Listing in  progress.
                </h6>
              
            </main>
        </div>
    );
};

export default CouponList;
