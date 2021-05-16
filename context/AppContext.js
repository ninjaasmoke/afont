import { useContext, createContext, useState, useEffect } from 'react'
import { getCookie, setCookie } from '../helper/cookies'
import { fontOptions } from '../helper/fontOptions';
import { IMAGE_PIXEL_RATIO } from '../helper/strings';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [showCookieModal, setShowCookieModal] = useState(true)
    const [showMobileWarning, setShowMobileWarning] = useState(false)

    const [selBgImgType, setSelBgImgType] = useState('nl')
    const [fontState, setFontState] = useState(fontOptions)

    const [selFont, setSelFont] = useState('')
    const [pixelRatio, setPixelRatio] = useState(2)
    const [allPages, setAllPages] = useState([])

    useEffect(() => {
        let ipr = getCookie(IMAGE_PIXEL_RATIO)
        if (ipr.length !== 0) {
            setPixelRatio(parseInt(ipr))
        }
    }, [])

    return (
        <AppContext.Provider value=
            {{
                showCookieModal,
                showMobileWarning,
                selBgImgType,
                fontState,
                pixelRatio,
                allPages,
                selFont,
                setShowCookieModal,
                setShowMobileWarning,
                setSelBgImgType,
                setFontState,
                setAllPages,
                setSelFont,
                setPixelRatio,
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