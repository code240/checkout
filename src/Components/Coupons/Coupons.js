import React, { useContext } from "react";
import "./Coupons.scss";
import { openPopup } from "../../Helper/Helper";
import { AppContext } from "../../Contexts/AppProvider";

const Coupons = () => {
    const { couponListRef } = useContext(AppContext);
    return (
        <div className="Coupons">
            <div className="main-coupon-section">
                <i className="bi bi-stars"></i>
                <input
                    type="text"
                    spellCheck="false"
                    placeholder="Enter Coupon code"
                    className="quicksand"
                />
                <span className="quicksand apply-button">Apply</span>
            </div>
            {false ? (
                <div className="promoted-coupon">
                    You are eligible for free delivery
                </div>
            ) : null}
            <div
                className="quicksand view-coupons"
                onClick={() => openPopup(couponListRef)}
            >
                View all coupons <i className="bi bi-chevron-double-right"></i>
            </div>
        </div>
    );
};

export default Coupons;
