import React, { useContext, useState } from "react";
import "./AddressFields.scss";
import { AppContext } from "../../Contexts/AppProvider";
import PopupHeader from "../../Components/PopupHeader/PopupHeader";
import { closePopup, openPopup } from "../../Helper/Helper";

const AddressFields = () => {
    const { addressFields, addressSelectionPage } = useContext(AppContext);
    const [needLandmark, setNeedLandmark] = useState(false);
    const backToAddressSelection = () => {
        closePopup(addressFields);
        openPopup(addressSelectionPage);
    };

    return (
        <div className="AddressFields" ref={addressFields}>
            <main>
                <div className="popup-sticky-header">
                    <PopupHeader page={addressFields}></PopupHeader>
                </div>
                <h6
                    className="quicksand back-option"
                    onClick={() => backToAddressSelection()}
                >
                    <i className="bi bi-arrow-left"></i> Add new address
                </h6>
                <div className="address-main">
                    <div className="input-group">
                        <select className="select quicksand">
                            <option value="IN">India</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <span className="floating-fieldname quicksand">
                            Pincode
                        </span>
                        <input
                            className="input quicksand"
                            type="text"
                            placeholder="Pincode"
                        />
                    </div>
                    <div className="input-group-2">
                        <div className="input-group">
                            <span className="floating-fieldname quicksand">
                                First Name
                            </span>
                            <input
                                className="input quicksand"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="input-group">
                            <span className="floating-fieldname quicksand">
                                Last Name
                            </span>
                            <input
                                className="input quicksand"
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <span className="floating-fieldname quicksand">
                            Address
                        </span>
                        <input
                            className="input quicksand"
                            type="text"
                            placeholder="Address"
                        />
                    </div>
                    {needLandmark ? (
                        <div className="input-group">
                            <span className="floating-fieldname quicksand">
                                Landmark
                            </span>
                            <input
                                className="input quicksand"
                                type="text"
                                placeholder="Landmark"
                            />
                        </div>
                    ) : null}
                    <span
                        className="quicksand option-button"
                        onClick={() => setNeedLandmark(!needLandmark)}
                    >
                        {!needLandmark ? (
                            <>
                                <i className="bi bi-plus-lg"></i> Add Landmark
                            </>
                        ) : (
                            <>
                                <i className="bi bi-eye-slash"></i> Hide
                                landmark
                            </>
                        )}
                    </span>

                    <div className="input-group-2">
                        <div className="input-group">
                            <span className="floating-fieldname quicksand">
                                City
                            </span>
                            <input
                                className="input quicksand"
                                type="text"
                                placeholder="City"
                            />
                        </div>
                        <div className="input-group">
                            <span className="floating-fieldname quicksand">
                                State
                            </span>
                            <select className="select quicksand">
                                <option value="HR">Haryana</option>
                            </select>
                        </div>
                    </div>

                    <button className="submit-button quicksand">
                        Add address
                    </button>
                </div>
            </main>
        </div>
    );
};

export default AddressFields;
