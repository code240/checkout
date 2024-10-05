import React, { useContext } from 'react';
import './Payments.scss';
import { AppContext } from '../../Contexts/AppProvider';
import PopupHeader from '../../Components/PopupHeader/PopupHeader';

const Payments = () => {
    const { paymentsPage } = useContext(AppContext);

    return (
        <div className='Payments' ref={paymentsPage}>
            <main>
                <PopupHeader page={paymentsPage}></PopupHeader>
            </main>
        </div>
    )
}

export default Payments