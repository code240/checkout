import React, { useContext } from 'react';
import './Payments.scss';
import { AppContext } from '../../Contexts/AppProvider';
import PopupHeader from '../../Components/PopupHeader/PopupHeader';
import Constants from '../../Data/Constants';
import UpiPayment from '../../Components/UpiPayment/UpiPayment';

const Payments = () => {
    const { paymentsPage } = useContext(AppContext);

    return (
        <div className='Payments' ref={paymentsPage}>
            <main>
                <PopupHeader page={paymentsPage}></PopupHeader>
                <div class="total">
                    <span class="quicksand">
                        Grand Total
                    </span>
                    <span class="quicksand bold">
                        {Constants.INR} 172.05
                    </span>
                </div>
                <h6 className='quicksand main-heading'>
                    Get extra 5% discount on prepaid orders.
                </h6>

                <div>
                    <UpiPayment></UpiPayment>
                </div>

            </main>
        </div>
    )
}

export default Payments