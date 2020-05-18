import './styles.css'
import Router from 'next/router'
import * as gtag from 'lib/gtag'

const isProd = process.env.NODE_ENV === 'production'

if(isProd) {
  Router.events.on('routeChangeComplete', url => gtag.pageview(url))
}

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App