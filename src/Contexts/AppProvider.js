import React, { createContext, useRef, useState } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [name, setName] = useState("Demo");
    const [otpService, setOtpService] = useState(1);
    const [activeSection, setActiveSection] = useState('SHIPPING');
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("IN")


    const [paymentPopupClosed, setPaymentPopupClosed] = useState(false);
    const [addressPopClosed, setAddressPopClosed] = useState(false);
    const [exitPopupClosed, setExitPopupClosed] = useState(false);


    const paymentsPage = useRef();
    const addressSelectionPage = useRef();
    const addressFields = useRef();
    const couponListRef = useRef();
    const backButtonRef = useRef();

    const value = {
        name,
        setName,
        paymentsPage,
        addressSelectionPage,
        setActiveSection,
        activeSection,
        addressFields,
        couponListRef,
        backButtonRef,
        paymentPopupClosed,
        setPaymentPopupClosed,
        addressPopClosed,
        setAddressPopClosed,
        exitPopupClosed, setExitPopupClosed,
        otpService, setOtpService,
        phoneNumber, setPhoneNumber,
        countryCode, setCountryCode
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }