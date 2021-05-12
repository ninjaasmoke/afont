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

export default function Step2() {
    const router = useRouter();
    const {
        query: { specimen },
    } = router;
    const fontExists = getFontNames().includes(specimen)

    const bgImages = ['/images/l/l-0.jpeg', '/images/ml/ml-0.jpeg', '/images/mnl/mnl-0.jpeg', '/images/nl/nl-0.jpeg'];
    const toolTips = ['Only Lines', 'Margin & Line', 'Only Margin', 'No Lines']

    const [selectedImg, setSelectedImg] = useState(bgImages[0])
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
                                <h1 >Select your background style.</h1> <span style={{ fontFamily: specimen }}>{specimen}{' '}⚡</span>
                            </div>
                            <div className={utils.h1Buttons}>
                                <Link href={{
                                    pathname: "/new/step-3",
                                    query: {
                                        specimen: specimen,
                                        bgImg: selectedImg
                                    }
                                }}>
                                    Next &rarr;
                                </Link>
                            </div>
                        </div>

                        <div className={stepStyle.pickBG}>
                            <ul>
                                {
                                    bgImages.map((imgsrc, index) => (
                                        <li key={index}
                                            onClick={() => setSelectedImg(imgsrc)}
                                            style={{ border: selectedImg == imgsrc ? '4px solid #6cc644' : '' }}
                                            title="Click to select"
                                        >
                                            <span className={stepStyle.tooltiptext}>{toolTips[index]}</span>
                                            <Image
                                                priority
                                                src={imgsrc}
                                                layout="fill"
                                            />
                                            <span className={stepStyle.checked}
                                                style={{ display: selectedImg == imgsrc ? '' : 'none' }}
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