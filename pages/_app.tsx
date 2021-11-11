import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Favicon } from 'components/meta'

function MyApp({ Component, pageProps }: AppProps) {
  return(<main>
    <Favicon />
    <Component {...pageProps} />
  </main>
  )
}

export default MyApp
