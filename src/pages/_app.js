import { useEffect } from "react";
import Router from "next/router";
import { pageview } from "lib/gtag";

const App = ({ Component, pageProps }) => {
  //-- track page views
  useEffect(() => {
    const isProd = process.env.NODE_ENV === "production"; // eslint-disable-line
    const handleRouteChange = (url) => {
      if (isProd) {
        pageview(url);
      }
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
};

export default App;
