import React, { useContext } from "react";
import "./ShippingAddress.scss";
import { AppContext } from "../../Contexts/AppProvider";
import { openPopup } from "../../Helper/Helper";

const ShippingAddress = () => {
    const { addressSelectionPage, setActiveSection } = useContext(AppContext);
    return (
        <div className="ShippingAddress">
           
            <div className="delivery-address">
                {/* <span className="check-absolute">
                    <i className="bi bi-check-lg"></i>
                </span> */}
                <h2 className="quicksand customer-name">
                    <span className="supporting-text">
                        <i className="bi bi-geo"></i>&nbsp;Deliver to&nbsp;
                    </span> 
                    Vipin Rao
                    <button className="quicksand" onClick={() => { openPopup(addressSelectionPage); }}>Change</button>
                </h2>
                <h5 className="quicksand address text-truncate">
                    Village Gangaicha Ahir,
                    Gurgaon, 123401
                </h5>
                <h6 className="quicksand identifier">
                    vipinraoxyz02@gmail.com
                </h6>
            </div>
            {/* <span
                className="quicksand change-text"
                onClick={() => openPopup(addressSelectionPage)}
            >
                <i className="bi bi-plus-lg"></i> Use different address
            </span> */}
            <div className="gap"></div>
        </div>
    );
};

export default ShippingAddress;
