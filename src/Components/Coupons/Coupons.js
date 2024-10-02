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
        {
            false ? (
                <div className='promoted-coupon'>
                    You are eligible for free delivery
                </div>
            ) : null
        }
        <div className='quicksand view-coupons'>
            View all coupons <i className="bi bi-chevron-double-right"></i>
        </div>
        
    </div>
  )
}

export default Coupons