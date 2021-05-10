import { useEffect } from 'react'
import Head from 'next/head'
import { AppWrapper } from '../context/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // const [darkModeOn, setDarkMode] = useState()

  useEffect(() => {
    const toggle = document.querySelector('.toggle')
    const h = new Date().getHours()
    toggle.checked = h > 7 && h < 10 // Light mode
  }, [])
  return (
    <AppWrapper>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Assignmentium</title>

        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#181818" />
      </Head>
      <input id="toggle" className="toggle" type="checkbox" title="Toggle Dark Mode" />
      <div className="background">
        <Component {...pageProps} />
      </div>
    </AppWrapper>
  )
}

export default MyApp
