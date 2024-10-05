import React, { useState } from 'react';
import './UpiPayment.scss';

const UpiPayment = () => {
    const [isqrcode, setIsqrcode] = useState(false);

    return (
        <div className='UpiPayment'>
            <div class="upi-section">
                <span class="quicksand offer-text">
                    Get 5% discount
                </span>
                <div className='icons'>
                    <div class="ico">
                        <img src="https://pbs.twimg.com/profile_images/1615271089705463811/v-emhrqu_400x400.png" alt="phonepe" />
                    </div>
                    <div class="ico">
                        <img src="https://i.pinimg.com/736x/ea/4d/f5/ea4df535ef139dc6b904040a8323095f.jpg" alt="phonepe" />
                    </div>
                    <div class="ico">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/019/909/641/small/paytm-transparent-paytm-free-free-png.png" alt="phonepe" />
                    </div>
                    <div class="ico">
                        <img src="https://img.icons8.com/color/512/bhim.png" alt="phonepe" />
                    </div>
                    <div class="ico">
                        <img src="https://yt3.googleusercontent.com/QI4nyLQV7enKT5hvyJfs7UPoY9PZf3HQYxT5GM56GWiuXo4us2huT7Hru2FNCrgxsPSIJuNzyA=s900-c-k-c0x00ffffff-no-rj" alt="phonepe" />
                    </div>
                </div>
                <hr className='upi-partition' />
                <div className='qr-with-upi'>
                    {
                        isqrcode ? (
                            <div className="qr-wrap">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=007010100273206@UTIB0000007.ifsc.npci&pn=National%20Relief%20Fund&size=150x150" alt="UPI_QR" loading='lazy' />
                                <div class="qr-hide-wrap">
                                    <span className='quicksand'>
                                        Click to see QR Code
                                    </span>
                                </div>
                            </div>

                        ) : null
                    }
                    <div className={isqrcode ? 'upi-input' : 'upi-input only-upi-field'}>
                        <input type="text" className='upi-input-field' placeholder='my-upi-id@xyz' />
                        <button className='upi-pay'>Pay Now</button>
                    </div>
                </div>
                <hr className='upi-partition' />
                <div class="vpa-accounts">
                    <h6 class="quicksand vpa">8930395227@ybl</h6>
                    <h6 class="quicksand vpa">vipinrao@axl</h6>
                    <h6 class="quicksand vpa">vipin8930@paytm</h6>
                </div>
            </div>
        </div>
    )
}

export default UpiPayment