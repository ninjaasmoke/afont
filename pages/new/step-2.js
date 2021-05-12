import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect } from 'react'
import InstrStep from '../../components/instrstep'
import Nav from '../../components/nav'
import { getFontNames } from '../../lib/fonts'
import styles from '../../styles/New.module.css'
import utils from '../../styles/utils.module.css'
import FourOhFour from '../404'

export default function Step2() {
    const router = useRouter();
    const {
        query: { specimen },
    } = router;
    const fontExists = getFontNames().includes(specimen)
    return (
        <>
            {
                fontExists
                    ? <div className={styles.container}>
                        <Head>
                            <title>Assignmentium | Create</title>
                        </Head>

                        <Nav navTitle="Create" />

                        <InstrStep steps={2} />

                        <div className={utils.h1}><h1 >Edit your font.</h1> <span style={{ fontFamily: specimen }}>⚡{specimen}</span> </div>
                    </div>
                    : <FourOhFour backUrl="/new/step-1" />
            }
        </>
    )
}