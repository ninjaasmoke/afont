import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import { useState } from 'react'
import InstrStep from '../../components/instrstep'
import Nav from '../../components/nav'
import { getFontNames } from '../../lib/fonts'
import utils from '../../styles/utils.module.css'
import stepStyle from '../../styles/step-2.module.css'
import FourOhFour from '../404'
import Link from 'next/link'
import { useAppContext } from '../../context/AppContext'
import { bgImages } from '../../helper/bgImages'

export default function Step2() {

    const { selBgImgType, setSelBgImgType } = useAppContext()

    const router = useRouter();
    const {
        query: { specimen },
    } = router;
    const fontExists = getFontNames().includes(specimen)

    const toolTips = ['Only Lines', 'Margin & Line', 'Only Margin', 'No Lines']

    const [selectedImg, setSelectedImg] = useState(bgImages.filter(c => c.name == selBgImgType)[0].src[0])
    return (
        <>
            {
                !fontExists
                    ? <FourOhFour backUrl="/new/step-1" />
                    : <div className={utils.container}>
                        <Head>
                            <title>Assignmentium | Create</title>
                            <link rel="preconnect" href="https://fonts.gstatic.com" />
                        </Head>

                        <link href={"https://fonts.googleapis.com/css2?family=" + specimen + "&display=swap"} rel="stylesheet" />

                        <Nav navTitle="Create" />

                        <InstrStep steps={2} />

                        <div className={utils.h1}>
                            <div>
                                <h1 >Select your background style.</h1> <span style={{ fontFamily: specimen }} title="Selected font" >{specimen}{' '}⚡</span>
                            </div>
                            <div className={utils.h1Buttons}>
                                <Link href={{
                                    pathname: "/new/step-3",
                                    query: {
                                        specimen: specimen
                                    }
                                }}>
                                    Next &rarr;
                                </Link>
                            </div>
                        </div>

                        <div className={stepStyle.pickBG}>
                            <ul>
                                {
                                    bgImages.map(({ src, name }, index) => (
                                        <li key={index}
                                            onClick={() => { setSelectedImg(src[0]); setSelBgImgType(name) }}
                                            style={{ border: selectedImg == src[0] ? '4px solid #6cc644' : '' }}
                                            title="Click to select"
                                        >
                                            <span className={stepStyle.tooltiptext}>{toolTips[index]}</span>
                                            <Image
                                                priority
                                                src={src[0]}
                                                layout="fill"
                                            />
                                            <span className={stepStyle.checked}
                                                style={{ display: selectedImg == src[0] ? '' : 'none' }}
                                            >Selected</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
            }
        </>
    )
}