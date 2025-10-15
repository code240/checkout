import React, { useContext } from "react";
import "./BackButton.scss";
import { AppContext } from "../../Contexts/AppProvider";
import PopupHeader from "../../Components/PopupHeader/PopupHeader";
import Constants from "../../Data/Constants";
import { closePopup, openPopup } from "../../Helper/Helper";
import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";

const BackButton = () => {
    const { backButtonRef, exitPopupClosed, setExitPopupClosed } = useContext(AppContext);

    const [{ y }, api] = useSpring(() => ({ y: 0 }));


    const hideDrawer = () => {
        api.start({
            y: window.innerHeight,
            config: { duration: 300 },
            onRest: () => {
                setExitPopupClosed(true);
                closePopup && closePopup(backButtonRef);

            },
        });
    };

    const bind = useDrag(
        ({ down, movement: [, my], velocity: [, vy], direction: [, dy] }) => {
            // if drawer is closed then ignore drag
            if (exitPopupClosed) return;

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

    const Exit = () => {
        window.parent.postMessage({
            eventName: "HARD_CLOSE_IFRAME_COMMAND",
            data: true,
        }, "*");
    }

    const DoNotExit = () => {
        closePopup && closePopup(backButtonRef);
    }

    return (
        <animated.div className="BackButton" ref={backButtonRef} style={{ transform: y.to((val) => `translateY(${val}px)`) }}>
            <animated.div className="main" {...bind()} style={{ touchAction: "none", cursor: "grab" }}>
                <div className="popup-sticky-header">
                    <PopupHeader page={backButtonRef}></PopupHeader>
                    <div className="notice">
                        <span className="quicksand">Product is in huge demand might run out of stock</span>
                    </div>
                </div>
                <h6 className="quicksand main-heading">
                    Are you sure you want to exit?
                </h6>
                <textarea className="feedback" placeholder="Share feedback..."></textarea>
                <button className="yes-btn" onClick={() => Exit()}>
                    Yes, exit checkout
                </button>
                <button className="no-btn" onClick={() => DoNotExit()}>
                    No, continue to checkout
                </button>

            </animated.div>
        </animated.div>
    );
};

export default BackButton;
