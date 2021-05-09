import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/New.module.css'

export default function New() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Assignmentium | Create new assignment</title>
            </Head>

            <nav className={styles.nav}>
                <Link href="/">
                    <a>&larr; Back Home</a>
                </Link>
                <span className={styles.navTitle}>
                    Create New Assignment
                </span>
                <span className={styles.navRSpace}></span>
            </nav>
        </div>
    )
}