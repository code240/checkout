import React, { createContext, useState  } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [name,setName] = useState("Demo");
    const value = {
        name,
        setName
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider,AppContext}