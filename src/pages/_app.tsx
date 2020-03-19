import { AppProps } from 'next/app'

import 'style/global.scss'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default App
