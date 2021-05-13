import { useContext, createContext, useState } from 'react'
import { getCookie, setCookie } from '../helper/cookies'
import { fontOptions } from '../helper/fontOptions';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [showCookieModal, setShowCookieModal] = useState(true)
    const [showMobileWarning, setShowMobileWarning] = useState(false)

    const [selBgImgType, setSelBgImgType] = useState('nl')
    const [fontState, setFontState] = useState(fontOptions)

    return (
        <AppContext.Provider value=
            {{
                showCookieModal,
                showMobileWarning,
                selBgImgType,
                fontState,
                setShowCookieModal,
                setShowMobileWarning,
                setSelBgImgType,
                setFontState,
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