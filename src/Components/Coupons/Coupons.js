import React from 'react';
import './Coupons.scss';

const Coupons = () => {
  return (
    <div className='Coupons'>
        <div className="main-coupon-section">
            <i className="bi bi-stars"></i>
            <input type="text" spellCheck="false" placeholder='Enter Coupon code' className='quicksand' />
            <span className='quicksand'>Apply</span>
        </div>
        
    </div>
  )
}

export default Coupons