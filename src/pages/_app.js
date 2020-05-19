import {useEffect} from 'react'
import './styles.css'
import Router from 'next/router'
import {pageview} from 'lib/gtag'

const App = ({ Component, pageProps }) => {
  const isProd = (process.env.NODE_ENV === 'production')
  
  //-- track page views
  useEffect(() => {
    const handleRouteChange = url => {
      if(isProd) pageview(url);
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  
  return <Component {...pageProps} />
}

export default App