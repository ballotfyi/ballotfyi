import { useEffect } from 'react';
import Router from 'next/router';
import { pageview } from 'lib/gtag';
import * as Sentry from '@sentry/react';
import GlobalStyles from 'components/GlobalStyles';

const App = ({ Component, pageProps }) => {
  //-- track page views
  useEffect(() => {
    const isProd = process.env.NODE_ENV === 'production'; // eslint-disable-line
    if (isProd) {
      Sentry.init({
        dsn: 'https://7992f1ce3baa41d28557d770061f9851@o428005.ingest.sentry.io/5372883',
      });
    }
    const handleRouteChange = (url) => {
      if (isProd) {
        pageview(url);
      }
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  );
};

export default App;
