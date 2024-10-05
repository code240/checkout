import React from 'react';
import './ContinueToPayment.scss';
import Footer from '../Footer/Footer';

const ContinueToPayment = () => {
  return (
    <div className='ContinueToPayment'>
        <div className='button-wrap'>
            <button className='quicksand'>
                Continue to payment
            </button>
        </div>
        <div className='footer'>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default ContinueToPayment;