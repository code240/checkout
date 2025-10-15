import React, { useContext } from 'react'
import "./PopupHeader.scss";
import { closePopup } from '../../Helper/Helper';
import { BasicContext } from '../../Contexts/BasicDataProvider';
const PopupHeader = (props) => {
    const { shopLogo, shopName } = useContext(BasicContext);

    return (
        <div className='PopupHeader'>
            <h6>
                {/* <span className='quicksand'>
                    <i className="bi bi-chevron-left"></i>Back
                </span> */}
            </h6>
                {
                    props?.slider ? (
                        <div className='slider-line'></div>
                    ) :  (
                        <div className='brand-logo'>
                            <img  src={shopLogo} alt={shopName}></img>
                        </div>
                    )
                }
            <div className='third-division'>
                <i className="bi bi-x" onClick={() => closePopup(props.page)}></i>
            </div>
        </div>
    )
}

export default PopupHeader