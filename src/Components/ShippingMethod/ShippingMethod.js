import React from 'react';
import './ShippingMethod.scss';

const ShippingMethod = () => {
  return (
    <div className='ShippingMethod'>
        <label htmlFor='delivery-option1'>
            <input type="radio" defaultChecked id='delivery-option1' name='delivery-option' />
            <h6 className='quicksand'>Stadard Shipping <b className='quicksand'>@ Rs 30</b></h6>
        </label>
        <label htmlFor='delivery-option2'>
            <input type="radio" id='delivery-option2' name='delivery-option' />
            <h6 className='quicksand'>Rapid Delivery <b className='quicksand'>@ Rs 100</b></h6>
        </label>
        
    </div>
  )
}

export default ShippingMethod