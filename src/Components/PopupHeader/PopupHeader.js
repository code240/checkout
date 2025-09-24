import React from 'react'
import "./PopupHeader.scss";
import { closePopup } from '../../Helper/Helper';
const PopupHeader = (props) => {

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
                            <img src='https://store.jiva.com/cdn/shop/files/Jiva-Ayurveda-TM-LOgo-new_large.png' alt='brand'></img>
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