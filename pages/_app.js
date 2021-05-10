import { useEffect } from 'react'
import { AppWrapper } from '../context/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const toggle = document.querySelector('.toggle')
    const h = new Date().getHours()
    toggle.checked = h > 7 & h < 20
  }, [])
  return (
    <AppWrapper>
      <input id="toggle" className="toggle" type="checkbox" title="Toggle Dark Mode" />
      <div className="background">
        <Component {...pageProps} />
      </div>
    </AppWrapper>
  )
}

export default MyApp
