import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/nav'
import { getFontNames } from '../../lib/fonts'
import styles from '../../styles/New.module.css'
import utils from '../../styles/utils.module.css'

export async function getStaticProps() {
    const fonts = getFontNames();
    return {
        props: {
            fonts
        }
    }
}

export default function Step1({ fonts }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Assignmentium | Create</title>
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

            <ul className={utils.fonts}>
                {fonts.map((font, index) => (
                    <li key={index} className={utils.font}>
                        <span className={utils.fontName}>{font}</span>
                    </li>
                ))}
            </ul>

            <div className={utils.gotoLearn}>
                If you are not sure how to use this app, please visit{' '} <Link href="/learn"><a>Learn.</a></Link>
            </div>
        </div>
    )
}