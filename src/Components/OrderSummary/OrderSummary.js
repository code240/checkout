import React, { useContext, useEffect, useState } from 'react';
import './OrderSummary.scss';
import Constants from '../../Data/Constants';
import { AppContext } from '../../Contexts/AppProvider';
import { BasicContext } from '../../Contexts/BasicDataProvider';
import { amountInPaisa } from '../../Helper/Helper';

const OrderSummary = () => {
    const [summaryProduct, setSummaryProduct] = useState(false)
    const {  } = useContext(AppContext);
    const { items, total, subtotal, shippingCharges, taxTotal, taxType, currency } = useContext(BasicContext);
    useEffect(() => {
        console.log("items::",items);
        
    })
    return (
        <div className='OrderSummary'>
            <div className='order-summary-wrap'>
                <div className='summary-button' onClick={() => setSummaryProduct(!summaryProduct)}>
                    <div className='title-container quicksand'>
                        <i className="bi bi-cart3"></i> Order Summary
                        {summaryProduct ? (<i className="bi bi-chevron-up downchevron"></i>) : (<i className="bi bi-chevron-down downchevron"></i>)}
                    </div>
                    <h6 className='quicksand summary-price'>
                        {Constants.INR} {amountInPaisa(total)}
                    </h6>
                </div>
                {
                    summaryProduct ? (
                        <div className="details">
                            <div className='detail-row'>
                                <span className='quicksand row-title'>
                                    Subtotal
                                </span>
                                <span className='quicksand row-value'>
                                    {Constants.INR} {amountInPaisa(subtotal)}
                                </span>
                            </div>
                            <div className='detail-row'>
                                <span className='quicksand row-title'>
                                    Tax (Inclusive)
                                </span>
                                <span className='quicksand row-value'>
                                    {Constants.INR} {amountInPaisa(taxTotal)}
                                </span>
                            </div>
                            <div className='detail-row'>
                                <span className='quicksand row-title'>
                                    Shipping Charges
                                </span>
                                <span className='quicksand row-value'>
                                    {Constants.INR} {amountInPaisa(shippingCharges)}
                                </span>
                            </div>
                            <div className='detail-row discount'>
                                <span className='quicksand row-title'>
                                    Applied Discount
                                </span>
                                <span className='quicksand row-value'>
                                    {Constants.INR} 10.00
                                </span>
                            </div>
                            <div className='detail-row'>
                                <span className='quicksand row-title'>
                                    Total
                                </span>
                                <span className='quicksand row-value'>
                                    {amountInPaisa(taxTotal)}
                                </span>
                            </div>
                        </div>
                    ) : null
                }
                {
                    summaryProduct ? (
                        <div className='summary-item-main'>
                            {
                                (items ?? []).map((element, index) => {
                                    return (
                                        <div className='item' key={index}>
                                            <div className="item-image">
                                                <img src={element.image} alt="product-image" />
                                            </div>
                                            <div className='item-info'>
                                                <h6 className="quicksand title">
                                                    {element.title} - {element.variant_title}
                                                </h6>
                                                <h6 className="quicksand quantity">
                                                    Quantity : {element.quantity}
                                                </h6>
                                                <h6 className="quicksand price">
                                                    price : {Constants.INR} {element.price?.toFixed(2)}
                                                </h6>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : null
                }
            </div>

        </div>
    )
}

export default OrderSummary