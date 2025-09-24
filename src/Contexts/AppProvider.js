import React, { createContext, useRef, useState  } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [name,setName] = useState("Demo");
    const [activeSection, setActiveSection] = useState('SHIPPING');
    const [paymentPopupClosed, setPaymentPopupClosed] = useState(false);
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
        setFreeDelivery
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider,AppContext}