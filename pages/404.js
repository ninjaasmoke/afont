// 404.js
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/404.module.css'

export default function FourOhFour({ backUrl }) {
    const router = useRouter()
    const images = ["/images/mic_drop.svg", "/images/searching.svg", "/images/taken.svg", "/images/cooking.svg", "/images/lost.svg", "/images/lost_online.svg"]
    const rand = Math.floor((Math.random() * 6));
    return (
        <div className={styles.container}>
            <Head>
                <title>Assignmentium | 404</title>
            </Head>
            <Image
                priority
                src={images[rand]}
                width={240}
                height={240}
            />
            {/* <h1 className={styles.h1} >404 - Page Not Found</h1> */}
            <div className={styles.desWrapper}>
                <p className={styles.des} >Where have you come from?{' '} Where are you going?</p>
                {
                    !backUrl
                        ? <Link href="/">
                            <a>
                                &larr; Go back home
                        </a>
                        </Link>
                        : <span onClick={() => router.back()} className={styles.goBack}>&larr; Go back</span>
                }
            </div>
        </div>
    )
}