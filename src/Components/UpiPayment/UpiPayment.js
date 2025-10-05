import React, { useContext, useState } from 'react';
import './UpiPayment.scss';
import Constants from '../../Data/Constants';
import { BasicContext } from '../../Contexts/BasicDataProvider';
import { amountInPaisa, PrintCurrency } from '../../Helper/Helper';

const UpiPayment = () => {
    const [isqrcode, setIsqrcode] = useState(false);
    const { isUpiQR, currency, isUpiIntent, Vpas, isUpiCollect, total } = useContext(BasicContext);

    if (true) {
        return (
            <div className='UpiPayment_skeleton'>
                <div className='intentContainer'>
                    <div className='skeleton intentSkeleton'></div>
                    <div className='skeleton intentSkeleton'></div>
                    <div className='skeleton intentSkeleton'></div>
                    <div className='skeleton intentSkeleton'></div>
                </div>
            
                <div className='collectWrapper'>
                    <div className='skeleton collectInput'></div>
                    <div className='skeleton collectButton'></div>
                </div>
            </div>
        )
    }

    return (
        <div className='UpiPayment'>
            <div className="upi-section">
                <span className="quicksand offer-text">
                    Get 5% discount
                </span>
                <h6 className='upi-title'>
                    <span className='quicksand upi-faster-text'>
                        Quick checkout with UPI
                    </span>
                    <span className='quicksand upi-amount'>
                        {PrintCurrency(currency)} {amountInPaisa(total)}
                    </span>
                </h6>
                {
                    !isqrcode ? (
                        <div className='icons'>
                            <div className="ico">
                                <img src="https://pbs.twimg.com/profile_images/1615271089705463811/v-emhrqu_400x400.png" alt="phonepe" />
                            </div>
                            <div className="ico">
                                <img src={Constants.images.public.googlepay} alt="googlepay" />
                            </div>
                            <div className="ico">
                                <img src={Constants.images.public.paytm} alt="paytm" />
                            </div>
                            <div className="ico">
                                <img src="https://img.icons8.com/color/512/bhim.png" alt="phonepe" />
                            </div>
                        </div>
                    ) : (
                        <div className='upi-qr-section'>

                        </div>
                    )
                }
                {
                    isUpiCollect ? (
                        <>
                            <hr className='upi-partition'></hr>
                            <div className='qr-with-upi'>
                                <div className='upi-input only-upi-field'>
                                    <input type="text" className='upi-input-field' placeholder='my-upi-id@xyz' />
                                    <button className='upi-pay quicksand'>Pay Now</button>
                                </div>
                            </div>
                            <div className="vpa-accounts">
                                {
                                    Vpas?.map((ele, eleInd) => {
                                        return (
                                            <h6 className="quicksand vpa" key={eleInd}>{ele}</h6>
                                        )
                                    })
                                }
                            </div>
                        </>
                    ) : null
                }


            </div>
        </div>
    )
}

export default UpiPayment