import { useContext, createContext, useState } from 'react'
import { getCookie, setCookie } from '../helper/cookies'

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [showCookieModal, setShowCookieModal] = useState(true)
    const [showMobileWarning, setShowMobileWarning] = useState(false)

    return (
        <AppContext.Provider value=
            {{
                showCookieModal,
                showMobileWarning,
                setShowCookieModal,
                setShowMobileWarning,
                setCookie,
                getCookie
            }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}