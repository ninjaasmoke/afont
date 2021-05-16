import Head from 'next/head'
import Nav from '../components/nav'
import { useAppContext } from '../context/AppContext'
import { setCookie } from '../helper/cookies'
import { IMAGE_PIXEL_RATIO, SHOW_STEPS_MSG } from '../helper/strings'
import utils from '../styles/Settings.module.css'

export default function Settings() {

    const { pixelRatio, setPixelRatio, stepMsg, setStepMsg, installable, handleInstallClick } = useAppContext()

    const pixelRatioMsg = {
        1: 'Low resolution, Small size',
        2: 'Average resolution, Medium Size (Best)',
        3: 'High Resolution, Even higher size',
    }

    const showStepsMsg = {
        'true': 'Shows steps in the top when creating a new document.',
        'false': 'Doesn\'t show steps.'
    }

    const updatePixelRatio = (ratio) => {
        setPixelRatio(ratio)
        setCookie(IMAGE_PIXEL_RATIO, ratio, 365)
    }

    const updateStepMsg = (value) => {
        setStepMsg(value)
        setCookie(SHOW_STEPS_MSG, value, 365)
    }

    return (
        <div className={utils.container}>
            <Head>
                <title>Assignmentium | Settings</title>
            </Head>

            <Nav linkTo="/" navTitle="Settings" />

            <div className={utils.grid}>
                <h1 className={utils.h1}>
                    App Options
                </h1>
                <div className={utils.card}>
                    <div className={utils.settingOption}>
                        <span className={utils.settingName}>
                            Install App
                        </span>
                        <span className={utils.settingSub}>
                            {
                                installable
                                    ? 'Install this app to your device for offline use.'
                                    : 'This app is either already installed or is not installable on your device.'
                            }
                        </span>
                    </div>
                    <button className={installable ? utils.installButton : utils.installButton + " " + utils.disabled} onClick={() => handleInstallClick()} >
                        {installable ? 'Install' : 'Installed'}
                    </button>
                </div>
                <div className={utils.gridBreak} />
                <div className={utils.card}>
                    <div className={utils.settingOption}>
                        <span className={utils.settingName}>
                            Image Pixel Ratio
                        </span>
                        <span className={utils.settingSub} >{pixelRatioMsg[pixelRatio]}</span>
                    </div>
                    <select className={utils.settingAction} value={pixelRatio} onChange={e => updatePixelRatio(e.target.value)} >
                        <option value={1} >1</option>
                        <option value={2} >2</option>
                        <option value={3} >3</option>
                    </select>
                </div>
                <div className={utils.gridBreak} />
                <div className={utils.card}>
                    <div className={utils.settingOption}>
                        <span className={utils.settingName}>
                            Show Steps
                        </span>
                        <span className={utils.settingSub}>{showStepsMsg[stepMsg]}</span>
                    </div>
                    <select className={utils.settingAction} value={stepMsg} onChange={e => updateStepMsg(e.target.value)} >
                        <option value={'true'}>Show</option>
                        <option value={'false'}>Don't show</option>
                    </select>
                </div>
                <div className={utils.gridBreak} />
                <div className={utils.card + " " + utils.disabled}>
                    <div className={utils.settingOption + " " + utils.disabled}>
                        <span className={utils.settingName}>
                            Save Documents (Coming soon)
                        </span>
                        <span className={utils.settingSub}>Save documents in-app so you can edit later.</span>
                    </div>
                    <select className={utils.settingAction + " " + utils.comingSoon} value={'true'} disabled >
                        <option value={'true'}>Save</option>
                        <option value={'false'}>Don't save</option>
                    </select>
                </div>
                <div className={utils.gridBreak} />
            </div>
        </div>
    )
}