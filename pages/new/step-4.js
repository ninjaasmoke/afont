import Head from 'next/head'
// import Link from 'next/Link'
import Nav from '../../components/nav'
import InstrStep from '../../components/instrstep'
import utils from '../../styles/utils.module.css'
import { useRouter } from 'next/router'
import { getFontNames } from '../../lib/fonts'
import { useAppContext } from '../../context/AppContext'

export default function Step4() {

    const { allPages } = useAppContext()

    const router = useRouter();
    const {
        query: { specimen },
    } = router;
    const fontExists = getFontNames().includes(specimen)

    return (
        <div className={utils.container}>
            <Head>
                <title>Assignmentium | Create</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
            </Head>

            <link href={"https://fonts.googleapis.com/css2?family=" + specimen + "&display=swap"} rel="stylesheet" />


            <Nav navTitle="Create" linkTo="/" />

            <InstrStep steps={4} />

            <div className={utils.h1}>
                <div><h1>Download your pdf.</h1> <span style={{ fontFamily: specimen }} title="Selected font" >{specimen}{' '}⚡</span> </div>
                {/* <div className={utils.h1Buttons}>
                    <Link href={{
                        pathname: "/new/step-4",
                        query: {
                            specimen: specimen
                        }
                    }}>
                        Next &rarr;
                    </Link>
                </div> */}
            </div>

            <div>
                {allPages.map((c, i) => (
                    <div key={i} >
                        <img src={c} />
                    </div>
                ))}
            </div>

        </div>
    )
}