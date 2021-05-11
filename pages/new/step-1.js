import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import Nav from '../../components/nav'
import { getFontNames } from '../../lib/fonts'
import styles from '../../styles/New.module.css'
import utils from '../../styles/utils.module.css'

export async function getStaticProps() {
    const fonts = ["Montserrat", "Product Sans", "Girassol"]
    const fontsLink =
        "https://fonts.googleapis.com/css2?family=" +
        fonts.map((cV) => cV.replace(/ /g, "+")).join("&family=") +
        "&display=swap"
    return {
        props: {
            fonts,
            fontsLink,
        },
    }
}


export default function Step1({ fonts, fontsLink }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Assignmentium | Create</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href={fontsLink} rel="stylesheet" />
            </Head>

            <Nav linkTo="/" navTitle="Create" />

            <div className={utils.instructions}>

                <div className={utils.step + ' ' + utils.active}>
                    <h2>Step 1</h2>
                    <p className={utils.stepInstr}>Pick a font.</p>
                </div>

                <div className={utils.step}>
                    <h2>Step 2</h2>
                    <p className={utils.stepInstr}>Edit your font.</p>
                </div>

                <div className={utils.step}>
                    <h2>Step 3</h2>
                    <p className={utils.stepInstr}>Copy the text required, and paste.</p>
                </div>

                <div className={utils.step}>
                    <h2>Step 4</h2>
                    <p className={utils.stepInstr}>Download.</p>
                </div>
            </div>

            <div className={utils.h1}><h1 >Pick a font.</h1></div>

            <ul className={utils.fonts}>
                {fonts.map((font, index) => (
                    <li key={index} className={utils.font}>
                        <span className={utils.fontName}>{font}</span>
                        <p className={utils.fontText} style={{ fontFamily: '"' + font + '"', }}>
                            The quick brown fox jumps over the lazy fox.
                        </p>
                    </li>
                ))}
            </ul>

            <div className={utils.gotoLearn}>
                If you are not sure how to use this app, please visit{' '} <Link href="/learn"><a>Learn.</a></Link>
            </div>
        </div>
    )
}