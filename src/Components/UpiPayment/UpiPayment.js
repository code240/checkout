import React, { useState } from 'react';
import './UpiPayment.scss';
import Constants from '../../Data/Constants';

const UpiPayment = () => {
    const [isqrcode, setIsqrcode] = useState(false);

    return (
        <div className='UpiPayment'>
            <div className="upi-section">
                <span className="quicksand offer-text">
                    Get 5% discount
                </span>
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
                <hr className='upi-partition' />
                <div className='qr-with-upi'>
                    {
                        isqrcode ? (
                            <div className="qr-wrap">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=007010100273206@UTIB0000007.ifsc.npci&pn=National%20Relief%20Fund&size=150x150" alt="UPI_QR" loading='lazy' />
                                <div className="qr-hide-wrap">
                                    <span className='quicksand'>
                                        Click to see QR Code
                                    </span>
                                </div>
                            </div>

                        ) : null
                    }
                    <div className={isqrcode ? 'upi-input' : 'upi-input only-upi-field'}>
                        <input type="text" className='upi-input-field' placeholder='my-upi-id@xyz' />
                        <button className='upi-pay quicksand'>Pay Now</button>
                    </div>
                </div>
                <hr className='upi-partition' />
                <div className="vpa-accounts">
                    <h6 className="quicksand vpa">8930395227@ybl</h6>
                    <h6 className="quicksand vpa">vipinrao@axl</h6>
                    <h6 className="quicksand vpa">vipin8930@paytm</h6>
                </div>
            </div>
        </div>
    )
}

export default UpiPayment