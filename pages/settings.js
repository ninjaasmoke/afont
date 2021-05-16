import Head from 'next/head'
import Nav from '../components/nav'
import { useAppContext } from '../context/AppContext'
import { setCookie } from '../helper/cookies'
import { IMAGE_PIXEL_RATIO } from '../helper/strings'
import utils from '../styles/Settings.module.css'

export default function Settings() {

    const { pixelRatio, setPixelRatio } = useAppContext()

    const pixelRatioMsg = {
        1: 'Low resolution, Small size',
        2: 'Average resolution, Medium Size (Best)',
        3: 'High Resolution, Even higher size',
    }

    const updatePixelRatio = (ratio) => {
        setPixelRatio(ratio)
        setCookie(IMAGE_PIXEL_RATIO, ratio, 365)
    }

    return (
        <div className={utils.container}>
            <Head>
                <title>Assignmentium | Settings</title>
            </Head>

            <Nav linkTo="/" navTitle="Settings" />

            <div className={utils.grid}>
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
            </div>
        </div>
    )
}