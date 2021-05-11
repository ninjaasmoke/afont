import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
import styles from '../styles/New.module.css'

export default function New() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Assignmentium | Create</title>
            </Head>

            <Nav linkTo="/" navTitle="Create" />

            <div className={styles.instructions}>

                <div className={styles.step + ' ' + styles.active}>
                    <h2>Step 1</h2>
                    <p className={styles.stepInstr}>Pick a font.</p>
                </div>

                <div className={styles.step}>
                    <h2>Step 2</h2>
                    <p className={styles.stepInstr}>Edit your font.</p>
                </div>

                <div className={styles.step}>
                    <h2>Step 3</h2>
                    <p className={styles.stepInstr}>Copy the text required, and paste.</p>
                </div>

                <div className={styles.step}>
                    <h2>Step 4</h2>
                    <p className={styles.stepInstr}>Download.</p>
                </div>
            </div>

            <div className={styles.gotoLearn}>
                If you are new and not sure how to use this app, please visit{' '} <Link href="/learn"><a>Learn</a></Link>
            </div>
        </div>
    )
}