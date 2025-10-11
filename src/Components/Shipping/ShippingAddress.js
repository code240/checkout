import React, { useContext } from "react";
import "./ShippingAddress.scss";
import { AppContext } from "../../Contexts/AppProvider";
import { openPopup } from "../../Helper/Helper";
import { BasicContext } from "../../Contexts/BasicDataProvider";
import { useParams } from "react-router-dom";

const ShippingAddress = () => {
    const { addressSelectionPage, setActiveSection, addressPopClosed, setAddressPopClosed } = useContext(AppContext);
    const { userLatestAdderess, fetchAddressList } = useContext(BasicContext);
    const { shopId, orderId } = useParams();


    const changeAddress = () =>  { 
        console.log("click change address");
        
        openPopup(addressSelectionPage);
        setAddressPopClosed(false); 
        fetchAddressList(shopId, orderId)
    }


    if (!userLatestAdderess?.firstName && !userLatestAdderess.lastName) {
        return (
            <div className='skeleton shippingAddress_skeleton'></div>
        )
    }
    return (
        <div className="ShippingAddress">

            <div className="delivery-address" onClick={() => changeAddress()}>
                {/* <span className="check-absolute">
                    <i className="bi bi-check-lg"></i>
                </span> */}
                <h2 className="quicksand customer-name">
                    <span className="supporting-text">
                        <i className="bi bi-geo"></i>&nbsp;Deliver to&nbsp;
                    </span>
                    {userLatestAdderess?.firstName} {userLatestAdderess?.lastName}
                    <button className="quicksand" onClick={() => changeAddress()}>Change</button>
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
