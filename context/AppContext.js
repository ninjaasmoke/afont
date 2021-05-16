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
    const [installable, setInstallable] = useState(false);

    const [deferredPrompt, setdeferredPrompt] = useState()

    const handleInstallClick = (dp = deferredPrompt) => {
        // Hide the app provided install promotion

        // Show the install prompt
        console.log(dp)
        dp.prompt();
        // Wait for the user to respond to the prompt
        dp.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
        });
    };

    useEffect(() => {
        let ipr = getCookie(IMAGE_PIXEL_RATIO)
        if (ipr.length !== 0) {
            setPixelRatio(parseInt(ipr))
        }
        let stm = getCookie(SHOW_STEPS_MSG)
        if (stm.length !== 0) {
            setStepMsg(stm)
        }
        window.addEventListener("beforeinstallprompt", (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setdeferredPrompt(e)
            // Update UI notify the user they can install the PWA
            setInstallable(true);
        });

        window.addEventListener('appinstalled', () => {
            // Log install to analytics
            console.log('INSTALL: Success');
            setInstallable(false);
        });
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
                installable,
                setShowCookieModal,
                setShowMobileWarning,
                setSelBgImgType,
                setFontState,
                setAllPages,
                setSelFont,
                setPixelRatio,
                setStepMsg,
                handleInstallClick,
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