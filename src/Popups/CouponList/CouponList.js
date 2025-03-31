import React, { useContext } from "react";
import "./CouponList.scss";
import { AppContext } from "../../Contexts/AppProvider";
import PopupHeader from "../../Components/PopupHeader/PopupHeader";
import Constants from "../../Data/Constants";
import { closePopup, openPopup } from "../../Helper/Helper";

const CouponList = () => {
    const { couponListRef } = useContext(AppContext);



    return (
        <div className="CouponList" ref={couponListRef}>
            <main>
                <div className="popup-sticky-header">
                    <PopupHeader page={couponListRef}></PopupHeader>
                    <div className="total">
                        <span className="quicksand">Grand Total</span>
                        <span className="quicksand bold">
                            {Constants.INR} 212.05
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
