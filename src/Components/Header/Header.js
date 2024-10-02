import React from 'react'
import "./Header.scss";
const Header = () => {
    return (
        <div className='Header'>
            <h6>
                <span className='quicksand'>
                    <i class="bi bi-chevron-left"></i>Back
                </span>
            </h6>
            <div className='brand-logo'>
                <img src='https://asvf.in/wp-content/uploads/2023/05/Logo_Black-2-002.png' alt='brand'></img>
            </div>
            <div className='third-division'></div>
        </div>
    )
}

export default Header