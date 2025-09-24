import React, { useContext, useEffect } from 'react';
import './ContinueToPayment.scss';
import Footer from '../Footer/Footer';
import { AppContext } from '../../Contexts/AppProvider';
import { openPopup } from '../../Helper/Helper';

const ContinueToPayment = () => {
    const { paymentsPage, setPaymentPopupClosed } = useContext(AppContext);

    return (
        <div className='ContinueToPayment'>
            {/* <div className='button-wrap'>
                <button className='quicksand' onClick={() => { openPopup(paymentsPage); setPaymentPopupClosed(false); }}>
                    Continue to payment
                </button>
            </div> */}
            <div className='footer'>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default ContinueToPayment;