import React from 'react'
import "./Header.scss";
const Header = ({props}) => {
    return (
        <div className='Header'>
            <h6>
                {
                    props?.hideBackBtn ? (
                        <span className='quicksand'>
                            <i className="bi bi-chevron-left"></i>Back
                        </span>
                    ) : null
                }
            </h6>
            <div className='brand-logo'>
                <img src='https://store.jiva.com/cdn/shop/files/Jiva-Ayurveda-TM-LOgo-new_large.png' alt='brand'></img>
            </div>
            <div className='third-division'></div>
        </div>
    )
}

export default Header