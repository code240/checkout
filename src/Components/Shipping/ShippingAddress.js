import React, { useContext } from "react";
import "./ShippingAddress.scss";
import { AppContext } from "../../Contexts/AppProvider";
import { openPopup } from "../../Helper/Helper";
import { BasicContext } from "../../Contexts/BasicDataProvider";

const ShippingAddress = () => {
    const { addressSelectionPage, setActiveSection, addressPopClosed, setAddressPopClosed } = useContext(AppContext);
    const { userLatestAdderess } = useContext(BasicContext);

    if (true) {
        return (
            <div className='skeleton shippingAddress_skeleton'>

            </div>
        )
    }
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
                    {userLatestAdderess?.firstName} {userLatestAdderess?.lastName}
                    <button className="quicksand" onClick={() => { openPopup(addressSelectionPage); setAddressPopClosed(false); }}>Change</button>
                </h2>
                <h5 className="quicksand address text-truncate">
                    {userLatestAdderess.line1},
                    {userLatestAdderess.city}, {userLatestAdderess.zipcode}
                </h5>
                <h6 className="quicksand identifier">
                    {userLatestAdderess.email}
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
