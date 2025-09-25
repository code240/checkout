import React, { useContext } from "react";
import "./AddressSelection.scss";
import { AppContext } from "../../Contexts/AppProvider";
import PopupHeader from "../../Components/PopupHeader/PopupHeader";
import Constants from "../../Data/Constants";
import { closePopup, openPopup } from "../../Helper/Helper";

import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";

const AddressSelection = () => {
    const { addressSelectionPage, addressFields, addressPopClosed, setAddressPopClosed } = useContext(AppContext);

    const AddNewAddress = () => {
        closePopup(addressSelectionPage);
        openPopup(addressFields);
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



    return (
        <animated.div className="AddressSelection" ref={addressSelectionPage} style={{ transform: y.to((val) => `translateY(${val}px)`) }}>
            <main>
                <animated.div className="popup-sticky-header" {...bind()} style={{ touchAction: "none", cursor: "grab" }}>
                    <PopupHeader slider={true}  page={addressSelectionPage}></PopupHeader>
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
                <h6 className="quicksand main-heading">
                    Select from your saved  address.
                </h6>
                <div className="address-main">
                    {[1, 2, 3, 4, 5, 6].map((address, index) => {
                        return (
                            <div className="delivery-address" key={index}>
                                <h2 className="quicksand customer-name">
                                    Vipin Rao
                                    <button className="quicksand">
                                        Edit
                                    </button>
                                </h2>
                                <h5 className="quicksand address text-truncate">
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
        </animated.div>
    );
};

export default AddressSelection;
