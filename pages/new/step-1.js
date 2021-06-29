import Head from 'next/head'
import Link from 'next/link'
import InstrStep from '../../components/instrstep'
import Nav from '../../components/nav'
import { useAppContext } from '../../context/AppContext'
import { getFontNames } from '../../lib/fonts'
import styles from '../../styles/New.module.css'
import utils from '../../styles/utils.module.css'

export async function getStaticProps() {
    const fonts = getFontNames();
    return {
        props: {
            fonts,
        },
    }
}


export default function Step1({ fonts }) {

    const { setSelFont, stepMsg } = useAppContext()

    return (
        <div className={styles.container}>
            <Head>
                <title>Assignmentium | Create - Step 1</title>
            </Head>

            <Nav linkTo="/" navTitle="Create" />

            <InstrStep steps={1} />

            <div className={utils.h1} style={{ marginTop: stepMsg === 'true' ? '100px' : 0 }} ><h1 >Pick a font.</h1></div>

            <ul className={utils.fonts}>
                {fonts.map((font, index) => (
                    <Link key={index} href={{
                        pathname: "/new/step-2",
                        query: { specimen: font }
                    }}>
                        <a className={utils.font} onClick={() => setSelFont(font)} >
                            <span className={utils.fontName}>{font}</span>
                            <p className={utils.fontText} style={{ fontFamily: '"' + font + '"', }}>
                                The quick brown fox jumps over the lazy fox.
                            </p>
                        </a>
                    </Link>
                ))}
            </ul>

            <div className={utils.gotoLearn}>
                If you are not sure how to use this app, please visit{' '} <Link href="/learn"><a>Learn.</a></Link>
            </div>
        </div>
    )
}