import Head from 'next/head'
import { useRouter } from "next/router"
import InstrStep from '../../components/instrstep'
import Nav from '../../components/nav'
import styles from '../../styles/New.module.css'
import utils from '../../styles/utils.module.css'

export default function Step2() {
    const router = useRouter()
    const {
        query: { specimen },
    } = router
    return (
        <div className={styles.container}>
            <Head>
                <title>Assignmentium | Create</title>
            </Head>

            <Nav navTitle="Create" />

            <InstrStep steps={2} />

            {specimen}
        </div>
    )
}