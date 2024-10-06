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
                <div className='popup-sticky-header'>
                    <PopupHeader page={paymentsPage}></PopupHeader>
                    <div class="total">
                        <span class="quicksand">
                            Grand Total
                        </span>
                        <span class="quicksand bold">
                            {Constants.INR} 172.05
                        </span>
                    </div>
                </div>
                <h6 className='quicksand main-heading'>
                    Get extra 5% discount on prepaid orders.
                </h6>

                <div>
                    <UpiPayment></UpiPayment>
                    <div class="btn-wrap">
                        <button className='payment-button'>
                            <span class="quicksand offer-text">
                                Get 5% discount
                            </span>
                            <div class="left">
                                <h6 className='quicksand'>
                                   Pay Via Cards
                                </h6>
                                <h5 className='quicksand'>
                                    INR 172.05 
                                </h5>
                            </div>
                            <div class="right">
                                <div class="icon1" style={{backgroundImage:`url('${Constants.images.public.mastercard}')`}}></div>
                                <div class="icon1" style={{backgroundImage:`url('${Constants.images.public.visa}')`}}></div>
                                <div class="icon1" style={{backgroundImage:`url('${Constants.images.public.rupay}')`}}></div>
                            </div>
                        </button>
                        <button className='payment-button'>
                            <span class="quicksand offer-text">
                                Get 5% discount
                            </span>
                            <div class="left">
                                <h6 className='quicksand'>
                                   Pay Via Netbanking
                                </h6>
                                <h5 className='quicksand'>
                                    INR 172.05 
                                </h5>
                            </div>
                            <div class="right">
                                <div class="icon1" style={{backgroundImage:`url('${Constants.images.public.axis}')`}}></div>
                                <div class="icon1" style={{backgroundImage:`url('${Constants.images.public.kotak}')`}}></div>
                                <div class="icon1" style={{backgroundImage:`url('${Constants.images.public.hdfc}')`}}></div>
                            </div>
                        </button>
                        <button className='payment-button'>
                            <span class="quicksand offer-text">
                                Get 5% discount
                            </span>
                            <div class="left">
                                <h6 className='quicksand'>
                                   Pay Via Wallets
                                </h6>
                                <h5 className='quicksand'>
                                    INR 172.05 
                                </h5>
                            </div>
                            <div class="right">
                                <div class="icon1" style={{backgroundImage:`url('${Constants.images.public.paytm}')`}}></div>
                                <div class="icon1" style={{backgroundImage:`url('${Constants.images.public.mobikwik}')`}}></div>
                                <div class="icon1" style={{backgroundImage:`url('${Constants.images.public.phonepewallet}')`}}></div>
                            </div>
                        </button>
                        <button className='payment-button'>
                            <span class="quicksand offer-text">
                                Get 5% discount
                            </span>
                            <div class="left">
                                <h6 className='quicksand'>
                                   Cash on delivery
                                </h6>
                                <h5 className='quicksand'>
                                    INR 172.05 
                                </h5>
                            </div>
                            <div class="right">
                                <div class="icon1" style={{backgroundImage:`url('${Constants.images.public.cod}')`}}></div>
                            </div>
                        </button>
                        
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Payments