import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider session={pageProps.session}><Component {...pageProps} /></Provider>
}

export default MyApp
