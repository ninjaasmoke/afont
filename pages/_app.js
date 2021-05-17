import { useEffect, useState } from 'react'
import Head from 'next/head'
import { AppWrapper } from '../context/AppContext'
import '../styles/globals.css'
import { getCookie, setCookie } from '../helper/cookies'
import { DARK_MODE_ON } from '../helper/strings'

function MyApp({ Component, pageProps }) {

  const toggleDarkMode = () => {
    const darkModeOn = getCookie(DARK_MODE_ON)
    if (darkModeOn === 'true') {
      setCookie(DARK_MODE_ON, 'false', 30)
    } else {
      setCookie(DARK_MODE_ON, 'true', 30)
    }
  }

  const [darkTheme, setDarkTheme] = useState(true)

  useEffect(() => {
    const darkModeOn = getCookie(DARK_MODE_ON)
    const toggle = document.querySelector('.toggle')
    const h = new Date().getHours()
    const bool = !darkModeOn ? (h > 7 && h < 19) : (darkModeOn != 'true')
    setDarkTheme(bool)
    toggle.checked = bool // Light mode
  }, [])
  return (
    <AppWrapper>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1"
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
        <meta name="theme-color" content={!darkTheme ? "#18181d" : "#fff"} />
        <meta
          name="keywords"
          content="afont,afonts,online assignments, assignments, text to handwriting, text-to-handwrting, assignmentium, ninjaasmoke, convert text to image, write assignment online"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="author" content="ninjaasmoke" />
        <meta name="copyright" content="ninjaasmoke" />
        <meta name="robots" content="follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Assignmentium" />
        <meta
          property="og:url"
          content="https://github.com/ninjaasmoke/afont"
        />
        <meta
          property="og:description"
          content="Bored of writing too many assignments? Just copy past your text to make assignments with handwriting like fonts!"
        />
        <meta property="og:site_name" content="Assignmentium" />

        <meta
          property="og:image:secure_url"
          itemprop="image"
          content="https://i.ibb.co/yd1Yygb/icon-512x512.png"
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://i.ibb.co/yd1Yygb/icon-512x512.png"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@nithins944" />
      </Head>
      <input id="toggle" className="toggle" type="checkbox" title="Toggle Dark Mode" onClick={toggleDarkMode} />
      <div className="background">
        <Component {...pageProps} />
      </div>
    </AppWrapper>
  )
}

export default MyApp
