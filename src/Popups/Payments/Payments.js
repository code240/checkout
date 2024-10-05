import React, { useContext } from 'react';
import './Payments.scss';
import { AppContext } from '../../Contexts/AppProvider';
import PopupHeader from '../../Components/PopupHeader/PopupHeader';
import Constants from '../../Data/Constants';

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
                </div>
            </main>
        </div>
    )
}

export default Payments