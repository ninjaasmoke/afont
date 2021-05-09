import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
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
          Got bored of writing too many assignments? Too much to write?
          <br />
          Worry not, ASSIGNMENTIUM is here!
          <br />
          Just choose your favorite handwriting, paste your text, and your assignment is ready to go.
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h2>New Assignment &rarr;</h2>
            <p>Create a new assignment or document.</p>
          </a>

          <a href="/" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn how to make a new assignment or document.</p>
          </a>

          {/* <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
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
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
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
    </div>
  )
}
