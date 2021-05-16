import Head from 'next/head'
import Nav from '../components/nav'
import learnStyles from '../styles/Learn.module.css'

export default function Learn() {
    return (
        <div className={learnStyles.container}>
            <Head>
                <title>Assignmentium | Learn</title>
            </Head>

            <Nav linkTo="/" navTitle="Learn" />

            <h1 className={learnStyles.heading}>
                1. How to use Assignmentium
            </h1>

            <div className={learnStyles.grid}>

            </div>

        </div>
    )
}