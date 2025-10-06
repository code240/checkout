import React, { useContext } from 'react';
import './ShippingMethod.scss';
import { AppContext } from '../../Contexts/AppProvider';
import { BasicContext } from '../../Contexts/BasicDataProvider';

const ShippingMethod = () => {

    const { } = useContext(AppContext);
    const { freeDelivery, shippingHandles, shippingCharges, setTotal, total, setShippingCharges, selectedShippingHandle, setSelectedShippingHandle } = useContext(BasicContext);


    const changeShippingHandle = (amount, handle) => {
        let newTotal = total - shippingCharges;
        setShippingCharges(parseInt(amount) * 100);
        newTotal = newTotal + parseInt(amount) * 100;
        setTotal(newTotal);
        setSelectedShippingHandle(handle);
    }

    if (!selectedShippingHandle) {
        return (
            <div className='ShippingMethod_skelton'>
                <div className='skeleton ShippingMethod_skelton1'></div>
                <div className='skeleton ShippingMethod_skelton2'></div>
            </div>
        )
    }

    return (
        <div className='ShippingMethod'>
            {

                freeDelivery ? (
                    <div className="quicksand free-delivery">
                        Free delivery unlocked 🎉🎉
                    </div>
                ) : (
                    <>
                        {
                            shippingHandles?.length > 0 ? (
                                <div className='main-ship-wrapper'>
                                    <h5 className='quicksand'>
                                        Shipping methods
                                    </h5>
                                    <div className='shipping-method-inner'>

                                        {
                                            shippingHandles.map((element, elementKey) => {
                                                return (
                                                    <div key={elementKey}>
                                                        <label htmlFor={'delivery-option' + elementKey} className={elementKey === 0 ? 'firstOption' : ''}>
                                                            <input
                                                                onChange={() => changeShippingHandle(element?.priceV2.amount, element?.handle)}
                                                                type="radio"
                                                                defaultChecked={elementKey === 0}
                                                                name='delivery-option'
                                                                id={'delivery-option' + elementKey}
                                                            />
                                                            <h6 className='quicksand'>{element?.title} <b className='quicksand'>@ {element?.priceV2.amount}</b></h6>
                                                        </label>
                                                        {
                                                            elementKey != shippingHandles?.length - 1 ? (
                                                                <hr></hr>
                                                            ) : null
                                                        }
                                                    </div>
                                                )
                                            })
                                        }


                                    </div>
                                </div>
                            ) : null

                        }

                    </>
                )
            }
        </div>
    )
}

export default ShippingMethod