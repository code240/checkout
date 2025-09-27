import React, { createContext, useRef, useState  } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [name,setName] = useState("Demo");
    const [activeSection, setActiveSection] = useState('SHIPPING');

    const [order, setOrder] = useState({});
    const [items, setItems] = useState([]);


    const [paymentPopupClosed, setPaymentPopupClosed] = useState(false);
    const [addressPopClosed, setAddressPopClosed] = useState(false);
    const [freeDelivery, setFreeDelivery] = useState(true);

    const paymentsPage = useRef();
    const addressSelectionPage = useRef();
    const addressFields = useRef();
    const couponListRef = useRef();

    const value = {
        name,
        setName,
        paymentsPage,
        addressSelectionPage,
        setActiveSection,
        activeSection,
        addressFields,
        couponListRef,
        paymentPopupClosed,
        setPaymentPopupClosed,
        freeDelivery,
        setFreeDelivery,
        addressPopClosed,
        setAddressPopClosed,
        order, setOrder,
        items, setItems,
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider,AppContext}