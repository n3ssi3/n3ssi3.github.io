import React from 'react'

import '@/styles/dist.css'
import AddressBar from '@/ui/AddressBar'

import GlobalNav from './GlobalNav'
import { ThemeProvider } from './ThemeContext'
import ThemedHtml from './ThemedHtml'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemedHtml>
        <head>
          <title>Curriculum Vitae - Vanessa Aryanata</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"></meta>
        </head>
        <body className='overflow-y-scroll dark:bg-zinc-900'>
          <div className='grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8'>
            <div className='col-start-2'>
              <GlobalNav />
            </div>

            <div className='col-start-3 space-y-6'>
              <AddressBar />

              <div className='rounded-xl border border-zinc-800 p-8 dark:bg-black'>{children}</div>
            </div>
          </div>
        </body>
      </ThemedHtml>
    </ThemeProvider>
  )
}
