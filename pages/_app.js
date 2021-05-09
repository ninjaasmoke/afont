import { AppWrapper } from '../context/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <input id="toggle" className="toggle" type="checkbox" />
      <div className="background">
        <Component {...pageProps} />
      </div>
    </AppWrapper>
  )
}

export default MyApp
