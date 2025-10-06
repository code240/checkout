import React, { useContext } from "react";
import "./Coupons.scss";
import { openPopup } from "../../Helper/Helper";
import { AppContext } from "../../Contexts/AppProvider";
import { BasicContext } from "../../Contexts/BasicDataProvider";

const Coupons = () => {
    const { couponListRef } = useContext(AppContext);
    const { items, total, shopName } = useContext(BasicContext);


    if (!shopName) {
        return (
            <div className='skeleton coupon_skeleton'></div>
        )
    }
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
                <span className="available-coupons-count">
                    6 Coupon available
                </span>
                <span className="view-coupons-text">
                    View all coupons <i className="bi bi-chevron-double-right"></i>
                </span>

            </div>
        </div>
    );
};

export default Coupons;
