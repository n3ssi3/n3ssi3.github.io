import React from 'react'

// Import the CSS
import '@/styles/dist.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { ThemeProvider } from './ThemeContext'
import ThemedHtml from './ThemedHtml'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
  return (
    <ThemeProvider>
      <ThemedHtml>
        <head>
          <title>Curriculum Vitae - Vanessa Aryanata</title>
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff'></meta>
        </head>
        <body className='overflow-y-scroll dark:bg-zinc-900'>{children}</body>
      </ThemedHtml>
    </ThemeProvider>
  )
}
