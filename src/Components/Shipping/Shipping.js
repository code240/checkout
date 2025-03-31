import React, { useContext } from "react";
import "./Shipping.scss";
import { AppContext } from "../../Contexts/AppProvider";
import { openPopup } from "../../Helper/Helper";

const Shipping = () => {
    const { addressSelectionPage, setActiveSection } = useContext(AppContext);
    return (
        <div className="Shipping">
            <h6 className="quicksand">
                Hii +91 8930395227 👋,
                <span className="quicksand pointer" onClick={() => setActiveSection("LOGIN")}>Logout</span>
            </h6>
            <div className="delivery-address">
                <span className="check-absolute">
                    <i className="bi bi-check-lg"></i>
                </span>
                <h2 className="quicksand customer-name">
                    Vipin Rao
                    <button className="quicksand">Change</button>
                </h2>
                <h5 className="quicksand address">
                    Village Gangaicha Ahir, Near Govt High school, Rewari,
                    Haryana, 123401
                </h5>
                <h6 className="quicksand identifier">
                    vipinraoxyz02@gmail.com
                </h6>
            </div>
            <span
                className="quicksand change-text"
                onClick={() => openPopup(addressSelectionPage)}
            >
                <i className="bi bi-plus-lg"></i> Use different address
            </span>
            <div className="gap"></div>
        </div>
    );
};

export default Shipping;
