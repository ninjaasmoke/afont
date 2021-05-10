import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Modal from '../components/modal'
import { useAppContext } from '../context/AppContext'
import styles from '../styles/Home.module.css'

const USER_COOKIE_CONSENT = 'USER_COOKIE_CONSENT'
const USER_MOBILE_WARNING = 'USER_MOBILE_WARNING'

const COOKIE_AGREEMENT_TEXT = 'This site uses cookies to enhance user experience.'
const MODAL_TEXT = 'This app was designed keeping a desktop in mind. Even though it is completely responsive and usable on a phone, I recommend using it on a PC to get the complete experience.'

export default function Home() {

  const { getCookie, setCookie, showCookieModal, setShowCookieModal, showMobileWarning, setShowMobileWarning } = useAppContext()

  const userCookieAgreement = () => {
    setCookie(USER_COOKIE_CONSENT, true, 30)
    setShowCookieModal(false)
  }

  const mobileWarning = () => {
    setCookie(USER_MOBILE_WARNING, false, 1)
    setShowMobileWarning(false)
  }

  useEffect(() => {
    if (getCookie(USER_COOKIE_CONSENT)) {
      setShowCookieModal(false)
    }
    if (window.innerWidth <= 600 && !getCookie(USER_MOBILE_WARNING)) {
      setShowMobileWarning(true)
    }
  }, [])

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Assignmentium | Home</title>
          <meta name="description" content="Got bored of writing too many assignments? Too much to write?
          Worry not, ASSIGNMENTIUM is here!
          Just choose your favorite handwriting, paste your text, and your assignment is ready to go." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="/">Assignmentium</a>
          </h1>

          <p className={styles.description}>
            Bored of writing too many assignments?
          <br />
          Just choose your favorite handwriting, paste your text, and your assignment is ready to go.
        </p>

          <div className={styles.grid}>
            <Link href="/new">
              <a className={styles.card}>
                <h2>New Assignment &rarr;</h2>
                <p>Create a new assignment or document.</p>
              </a>
            </Link>

            <Link href="/learn">
              <a className={styles.card}>
                <h2>Learn &rarr;</h2>
                <p>Learn how to make a new assignment or document.</p>
              </a>
            </Link>

            {/* <a href="/" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Contribute or see how the app works.</p>
          </a>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}>
            <h2>Donate &rarr;</h2>
            <p>Donate to development.</p>
          </a> */}
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://ninjaasmoke.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by {' '}<code className={styles.code}>ninjaasmoke</code>
          </a>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>

        <style jsx global>{`
        h1, h2, h3, h4, h5 {
          font-family: "Raleway";
        }
      `}</style>
      </div>
      {showCookieModal &&
        <Modal modalText={COOKIE_AGREEMENT_TEXT} agreementFunction={userCookieAgreement} />
      }
      {!showCookieModal && showMobileWarning &&
        <Modal modalText={MODAL_TEXT} agreementFunction={mobileWarning} />
      }
    </>
  )
}
