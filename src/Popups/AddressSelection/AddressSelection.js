import React, { useContext } from "react";
import "./AddressSelection.scss";
import { AppContext } from "../../Contexts/AppProvider";
import PopupHeader from "../../Components/PopupHeader/PopupHeader";
import Constants from "../../Data/Constants";
import { closePopup, openPopup } from "../../Helper/Helper";

import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import { useNavigate, useParams } from "react-router-dom";
import { BasicContext } from "../../Contexts/BasicDataProvider";
import { Button, Message, toaster, useToaster } from 'rsuite';

const AddressSelection = () => {
    const { addressSelectionPage, addressFields, addressPopClosed, setAddressPopClosed } = useContext(AppContext);
    const { addressList, UpdateOrder, setUserLatestAdderess, setShowFullScreenLoader, fetchingAddressList } = useContext(BasicContext);
    const navigate = useNavigate();
    const { shopId, orderId } = useParams();

    const AddNewAddress = () => {
        closePopup(addressSelectionPage);
        navigate(`/${shopId}/${orderId}/checkout/address`)
    }

    const [{ y }, api] = useSpring(() => ({ y: 0 }));


    const hideDrawer = () => {
        api.start({
            y: window.innerHeight,
            config: { duration: 300 },
            onRest: () => {
                setAddressPopClosed(true);
                closePopup && closePopup(addressSelectionPage);
                console.log("DEMOOOO");

            },
        });
    };

    const bind = useDrag(
        ({ down, movement: [, my], velocity: [, vy], direction: [, dy] }) => {
            // if drawer is closed then ignore drag
            if (addressPopClosed) return;

            if (down) {
                // only allow drag to bottom + resistance
                api.start({ y: my > 0 ? my / 1.2 : 0, immediate: true });
            } else {
                // release: close or snap back
                if (my > 150 || (vy > 1 && dy > 0)) {
                    hideDrawer();
                } else {
                    api.start({ y: 0, config: { duration: 300 } });
                }
            }
        },
        { axis: "y" }
    );


    const selectAddress = async (address) => {
        setShowFullScreenLoader(true);
        let response = await UpdateOrder(address?.id, shopId, orderId)
        setShowFullScreenLoader(false);
        if (response) {
            closePopup(addressSelectionPage);
            setUserLatestAdderess({
                "address_ref_id": address.id,
                "city": address.city,
                "country": address.country,
                "email": address.email,
                "firstName": address.first_name,
                "lastName": address.last_name,
                "line1": address.line1,
                "line2": address.line2,
                "phone": address.phone,
                "state": address.state,
                "zipcode": address.zipcode
            })
            navigate(`/${shopId}/${orderId}/checkout`)
        } else {
            toaster.push(
                <Message showIcon type="error" closable>
                    Failed to select this address for delivery.
                </Message>,
                { placement: 'topCenter', duration: 3000 }
            );
        }
    }


    return (
        <animated.div className="AddressSelection" ref={addressSelectionPage} style={{ transform: y.to((val) => `translateY(${val}px)`) }}>
            <main>
                <animated.div className="popup-sticky-header" {...bind()} style={{ touchAction: "none", cursor: "grab" }}>
                    <PopupHeader slider={true} page={addressSelectionPage}></PopupHeader>
                    {/* <div className="total">
                        <span className="quicksand">Grand Total</span>
                        <span className="quicksand bold">
                            {Constants.INR} 212.05
                        </span>
                    </div> */}
                    <div className="add-address-section">
                        <button className="quicksand add-address-button" onClick={() => AddNewAddress()}>
                            Add new address
                        </button>
                    </div>
                </animated.div>

                {
                    !fetchingAddressList ? (
                        <>
                            <h6 className="quicksand main-heading">
                                Select from your saved  address.
                            </h6>
                            <div className="address-main">
                                {addressList.map((address, index) => {
                                    return (
                                        <div className="delivery-address" key={index} onClick={() => selectAddress(address)}>
                                            <h2 className="quicksand customer-name">
                                                {address.first_name} {address.last_name}
                                                <button className="quicksand">
                                                    Edit
                                                </button>
                                            </h2>
                                            <h5 className="quicksand address text-truncate">
                                                {address?.line1}, {address?.line2} <br />
                                                {address?.city}, {address?.state}, {address.zipcode}
                                            </h5>
                                            <h6 className="quicksand identifier">
                                                {address?.email}  &#183;  {address?.phone}
                                            </h6>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="gap"></div>
                            <div className="skeleton loadingEffect"></div>
                            <div className="skeleton loadingEffect"></div>
                            <div className="skeleton loadingEffect"></div>
                            <div className="skeleton loadingEffect"></div>
                            <div className="skeleton loadingEffect"></div>
                        </>
                    )
                }


            </main>
        </animated.div>
    );
};

export default AddressSelection;
