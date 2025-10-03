import React, { createContext, useRef, useState } from 'react'

const BasicContext = createContext();

const BasicDataProvider = ({ children }) => {

    const [order, setOrder] = useState({});
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [shippingCharges, setShippingCharges] = useState(0);
    const [taxTotal, setTaxTotal] = useState(0);
    const [taxType, setTaxType] = useState("Inclusive");
    const [currency, setCurrency] = useState("");

    const value = {
        order, setOrder,
        items, setItems,
        total, setTotal,
        subtotal, setSubtotal,
        shippingCharges, setShippingCharges,
        taxTotal, setTaxTotal,
        taxType, setTaxType,
        currency, setCurrency,
    }
    return (
        <BasicContext.Provider value={value}>
            {children}
        </BasicContext.Provider>
    )
}

export { BasicDataProvider, BasicContext }