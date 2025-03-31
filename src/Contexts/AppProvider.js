import React, { createContext, useRef, useState  } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [name,setName] = useState("Demo");
    const [activeSection, setActiveSection] = useState('OTPVERIFICATION');

    const paymentsPage = useRef();
    const addressSelectionPage = useRef();
    const addressFields = useRef();

    const value = {
        name,
        setName,
        paymentsPage,
        addressSelectionPage,
        setActiveSection,
        activeSection,
        addressFields
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider,AppContext}