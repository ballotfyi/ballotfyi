import { useEffect } from 'react';
import Router from 'next/router';
import dynamic from "next/dynamic";

const App = ({ Component, pageProps }) => {
  //-- track page views
  useEffect(() => {
    import('lib/gtag').then( gtag => {
      const isProd = process.env.NODE_ENV === 'production'; // eslint-disable-line
      const handleRouteChange = (url) => {
        if (isProd) {
          gtag.pageview(url);
        }
      };
      Router.events.on('routeChangeComplete', handleRouteChange);
    })
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
};

export default App;
