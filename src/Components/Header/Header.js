import React, { useContext } from 'react'
import "./Header.scss";
import { AppContext } from '../../Contexts/AppProvider';
import { closePopup, openPopup } from '../../Helper/Helper';


const Header = ({ props }) => {
    const { backButtonRef, setExitPopupClosed } = useContext(AppContext);

    const ShowExitPopup = () => {
        openPopup(backButtonRef);
        setExitPopupClosed(false);
    }


    if (true) {
        return (
            <div className='Header_skeleton'>
                <div className='skeleton backBtn'></div>
                <div className='skeleton logoSkeleton'></div>
                <div className='third-division'>
                    <span>
                        <i className='bi bi-shield-lock-fill'></i> 100% Secured Payment
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className='Header'>
            <h6>
                {
                    !props?.hideBackBtn ? (
                        <span className='quicksand' onClick={() => ShowExitPopup()}>
                            <i className="bi bi-chevron-left"></i>Back
                        </span>
                    ) : null
                }
            </h6>
            <div className='brand-logo'>
                <img src='https://store.jiva.com/cdn/shop/files/Jiva-Ayurveda-TM-LOgo-new_large.png' alt='brand'></img>
            </div>
            <div className='third-division'>
                <span>
                    <i className='bi bi-shield-lock-fill'></i> 100% Secured Payment
                </span>
            </div>
        </div>
    )
}

export default Header