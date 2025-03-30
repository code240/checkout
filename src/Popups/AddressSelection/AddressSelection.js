import React, { useContext } from "react";
import "./AddressSelection.scss";
import { AppContext } from "../../Contexts/AppProvider";
import PopupHeader from "../../Components/PopupHeader/PopupHeader";
import Constants from "../../Data/Constants";
import { closePopup, openPopup } from "../../Helper/Helper";

const AddressSelection = () => {
    const { addressSelectionPage,addressFields } = useContext(AppContext);

    const AddNewAddress = () => {
        closePopup(addressSelectionPage);
        openPopup(addressFields);
    }

    return (
        <div className="AddressSelection" ref={addressSelectionPage}>
            <main>
                <div className="popup-sticky-header">
                    <PopupHeader page={addressSelectionPage}></PopupHeader>
                    {/* <div className="total">
                        <span className="quicksand">Grand Total</span>
                        <span className="quicksand bold">
                            {Constants.INR} 212.05
                        </span>
                    </div> */}
                    <div className="add-address-section">
                        <button className="add-address-button" onClick={() => AddNewAddress()}>
                            Add new address
                        </button>
                    </div>
                </div>
                <h6 className="quicksand main-heading">
                    Select from your saved  address.
                </h6>
                <div className="address-main">
                    {[1,2,3,4,5,6].map((address, index) => {
                        return (
                            <div className="delivery-address" key={index}>
                                <h2 className="quicksand customer-name">
                                    Vipin Rao
                                    <button className="quicksand">
                                        Edit
                                    </button>
                                </h2>
                                <h5 className="quicksand address">
                                    Village Gangaicha Ahir, Near Govt High
                                    school, Rewari, Haryana, 123401
                                </h5>
                                <h6 className="quicksand identifier">
                                    vipinraoxyz02@gmail.com
                                </h6>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default AddressSelection;
