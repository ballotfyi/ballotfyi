import Head from 'next/head'
import {AmpAnalytics} from 'components/amp/amp-wrappers'
import {useAmp} from 'next/amp'
import {useRouter} from 'next/router'

import { GA_TRACKING_ID } from 'lib/gtag'

const Analytics = React.memo(() => {
  return useAmp() ? <AmpHead/> : <GoogAnalyticsHead/>;
})

//-- must be placed in body
const AmpHead = React.memo(() => {
  const isProd = (process.env.NODE_ENV === 'production')
  if (!isProd) return null;
  const router = useRouter()
  const body = {
    "vars": {
      "account": GA_TRACKING_ID
    },
    "triggers": {
      "default pageview": {
        "on": "visible",
        "request": "pageview",
        "vars": {
          "canonicalPath": router.pathname
        }
      }
    }
  }
  return (
    <AmpAnalytics>
      {body}
    </AmpAnalytics>
  )
})

const GoogAnalyticsHead = React.memo(() => (
  <Head>
    <script key="google-tag-manager" async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
    <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
        `,
      }}
    />
  </Head>
))

export default Analytics