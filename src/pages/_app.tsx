import type { AppProps } from 'next/app'
import '../styles/main.scss'

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return <Component {...pageProps} />
}

export default MyApp
