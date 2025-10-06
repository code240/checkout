import React, { useContext } from 'react'
import "./Header.scss";
import { AppContext } from '../../Contexts/AppProvider';
import { closePopup, openPopup } from '../../Helper/Helper';
import { BasicContext } from '../../Contexts/BasicDataProvider';


const Header = ({ props }) => {
    const { backButtonRef, setExitPopupClosed } = useContext(AppContext);
    const { shopLogo, shopName } = useContext(BasicContext);

    const ShowExitPopup = () => {
        openPopup(backButtonRef);
        setExitPopupClosed(false);
    }


    if (!shopName) {
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
                <img src={shopLogo} alt={shopName}></img>
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