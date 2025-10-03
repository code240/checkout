import React from 'react';
import './CardPayment.scss';
import { useNavigate, useParams } from 'react-router-dom';

const CardPayment = ({ setSelectedMethod }) => {
    const navigate = useNavigate();
    const { orderId, shopId } = useParams();

    const goBack = () => {
        navigate(`/${shopId}/${orderId}/checkout`)
    }

    return (
        <div className='CardPayment'>

            <h6>
                CardPayment
            </h6>
            <h6 className="back-option quicksand" onClick={() => goBack()}>
                <i className="bi bi-arrow-90deg-left"></i> Back to payment options
            </h6>
        </div>
    )
}

export default CardPayment