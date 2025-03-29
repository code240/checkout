import React from 'react';
import './CardPayment.scss';

const CardPayment = ({setSelectedMethod}) => {

    return (
        <div className='CardPayment'>
            
            <h6>
                CardPayment
            </h6>
            <h6 className="back-option quicksand" onClick={() => setSelectedMethod("")}>
                <i className="bi bi-arrow-90deg-left"></i> Back to payment options
            </h6>
        </div>
    )
}

export default CardPayment