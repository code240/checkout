import React, { useContext, useEffect, useState } from 'react';
import './OrderSummary.scss';
import Constants from '../../Data/Constants';
import { AppContext } from '../../Contexts/AppProvider';
import { BasicContext } from '../../Contexts/BasicDataProvider';
import { amountInPaisa, PrintCurrency } from '../../Helper/Helper';

const OrderSummary = () => {
    const [summaryProduct, setSummaryProduct] = useState(false)
    const { } = useContext(AppContext);
    const { items, total, subtotal, discountCode, discountAmount, shippingCharges, taxTotal, taxType, currency, shippingHandle } = useContext(BasicContext);

    if (!items || items?.length == 0) {
        return (
            <div className='skeleton ordersummary_skeleton'>

            </div>
        )
    }
    return (
        <div className='OrderSummary'>
            <div className='order-summary-wrap'>
                <div className='summary-button' onClick={() => setSummaryProduct(!summaryProduct)}>
                    <div className='title-container quicksand'>
                        <i className="bi bi-cart3"></i> Order Summary
                        {summaryProduct ? (<i className="bi bi-chevron-up downchevron"></i>) : (<i className="bi bi-chevron-down downchevron"></i>)}
                    </div>
                    <h6 className='quicksand summary-price'>
                        {PrintCurrency(currency)} {amountInPaisa(total)}
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
                                    {PrintCurrency(currency)} {amountInPaisa(subtotal)}
                                </span>
                            </div>
                            <div className='detail-row'>
                                <span className='quicksand row-title'>
                                    Tax ({taxType})
                                </span>
                                <span className='quicksand row-value'>
                                    {PrintCurrency(currency)} {amountInPaisa(taxTotal)}
                                </span>
                            </div>
                            <div className='detail-row'>
                                <span className='quicksand row-title'>
                                    Shipping Charges 
                                    {
                                        shippingCharges == 0 ? (
                                            <span className='quicksand free'>Free</span>
                                        ) : null
                                    }
                                </span>
                                <span className='quicksand row-value'>
                                    {PrintCurrency(currency)} {amountInPaisa(shippingCharges)}
                                </span>
                            </div>
                            {
                                discountCode != "" ? (
                                    <div className='detail-row discount'>
                                        <span className='quicksand row-title'>
                                            Applied Discount
                                        </span>
                                        <span className='quicksand row-value'>
                                            {PrintCurrency(currency)} {amountInPaisa(discountAmount)}
                                        </span>
                                    </div>
                                ) : null
                            }

                            <div className='detail-row'>
                                <span className='quicksand row-title'>
                                    Total
                                </span>
                                <span className='quicksand row-value'>
                                    {PrintCurrency(currency)} {amountInPaisa(total)}
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
                                                    price : {PrintCurrency(currency)} {amountInPaisa(element.price)}
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