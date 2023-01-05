import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

import { ThemeProvider } from '../app/ThemeContext'
// Import the CSS
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default appWithTranslation(App)
