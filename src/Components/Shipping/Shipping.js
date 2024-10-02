import React from 'react';
import './Shipping.scss';


const Shipping = () => {
  return (
    <div className='Shipping'>
        <h6>
            Hii Vipin 👋, Your item will deliver to this address 😋.  
        </h6>
        <div class="delivery-address">
            <span className='check-absolute'>
                <i className="bi bi-check-lg"></i>
            </span>
            <h2 className='quicksand customer-name'>
                Vipin Rao 
                <button>Edit</button>
            </h2>
            <h5 className='quicksand address'>
                Village Gangaicha Ahir, Rewari, Haryana, 123401
            </h5>
            <h6 className='quicksand identifier'>
                vipinraoxyz02@gmail.com
            </h6>
        </div>
        <span className='quicksand change-text'>
            Click to <b>change</b> address ? 🙄🙄  
        </span>
    </div>
  )
}

export default Shipping