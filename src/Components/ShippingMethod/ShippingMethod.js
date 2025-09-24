import React, { useContext } from 'react';
import './ShippingMethod.scss';
import { AppContext } from '../../Contexts/AppProvider';

const ShippingMethod = () => {

    const { freeDelivery } = useContext(AppContext);


    return (
        <div className='ShippingMethod'>
            {

                freeDelivery ? (
                    <div className="quicksand free-delivery">
                        Free delivery unlocked 🎉🎉
                    </div>
                ) : (

                    <div className='shipping-method-inner'>
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
        </div>
    )
}

export default ShippingMethod