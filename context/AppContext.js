import { useContext, createContext, useState } from 'react'
import { getCookie, setCookie } from '../helper/cookies'
import { fontOptions } from '../helper/fontOptions';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [showCookieModal, setShowCookieModal] = useState(true)
    const [showMobileWarning, setShowMobileWarning] = useState(false)

    const [selBgImgType, setSelBgImgType] = useState('nl')
    const [fontState, setFontState] = useState(fontOptions)

    const [selFont, setSelFont] = useState('')

    const [allPages, setAllPages] = useState([])
    const [nPages, setNPages] = useState(0)

    return (
        <AppContext.Provider value=
            {{
                showCookieModal,
                showMobileWarning,
                selBgImgType,
                fontState,
                allPages,
                selFont,
                nPages,
                setShowCookieModal,
                setShowMobileWarning,
                setSelBgImgType,
                setFontState,
                setAllPages,
                setSelFont,
                setNPages,
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