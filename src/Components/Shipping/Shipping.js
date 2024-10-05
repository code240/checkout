import React from 'react';
import './Shipping.scss';


const Shipping = () => {
  return (
    <div className='Shipping'>
        <h6 className='quicksand'>
            Hii +91 8930395227 👋, 
            <span className='quicksand'>
                Logout    
            </span>   
        </h6>
        <div className="delivery-address">
            <span className='check-absolute'>
                <i className="bi bi-check-lg"></i>
            </span>
            <h2 className='quicksand customer-name'>
                Vipin Rao 
                <button className='quicksand'>Change</button>
            </h2>
            <h5 className='quicksand address'>
                Village Gangaicha Ahir, Near Govt High school, Rewari, Haryana, 123401
            </h5>
            <h6 className='quicksand identifier'>
                vipinraoxyz02@gmail.com
            </h6>
        </div>
        {/* <span className='quicksand change-text'>
            Click to <b>change</b> address
        </span> */}
        <div className="gap"></div>
    </div>
  )
}

export default Shipping