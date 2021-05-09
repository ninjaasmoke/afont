import Head from 'next/head'
import Nav from '../components/nav'
import styles from '../styles/New.module.css'

export default function Learn() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Assignmentium | Learn</title>
            </Head>

            <Nav linkTo="/" navTitle="Learn how to use assignmentium" />
        </div>
    )
}