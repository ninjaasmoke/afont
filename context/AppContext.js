import { useContext, createContext, useState, useEffect } from 'react'
import { getCookie, setCookie } from '../helper/cookies'
import { fontOptions } from '../helper/fontOptions';
import { IMAGE_PIXEL_RATIO, SHOW_STEPS_MSG } from '../helper/strings';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [showCookieModal, setShowCookieModal] = useState(true)
    const [showMobileWarning, setShowMobileWarning] = useState(false)

    const [selBgImgType, setSelBgImgType] = useState('nl')
    const [fontState, setFontState] = useState(fontOptions)

    const [selFont, setSelFont] = useState('')
    const [allPages, setAllPages] = useState([])

    const [pixelRatio, setPixelRatio] = useState(2)
    const [stepMsg, setStepMsg] = useState('true')

    useEffect(() => {
        let ipr = getCookie(IMAGE_PIXEL_RATIO)
        if (ipr.length !== 0) {
            setPixelRatio(parseInt(ipr))
        }
        let stm = getCookie(SHOW_STEPS_MSG)
        if (stm.length !== 0) {
            setStepMsg(stm)
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
                stepMsg,
                setShowCookieModal,
                setShowMobileWarning,
                setSelBgImgType,
                setFontState,
                setAllPages,
                setSelFont,
                setPixelRatio,
                setStepMsg,
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