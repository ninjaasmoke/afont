import Head from 'next/head'
import Nav from '../components/nav'
import styles from '../styles/New.module.css'

export default function New() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Assignmentium | Create new assignment</title>
            </Head>

            <Nav linkTo="/" navTitle="Create New Assignment" />
        </div>
    )
}