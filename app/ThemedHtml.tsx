'use client'

import clsx from 'clsx'
import React from 'react'

import { useTheme } from './ThemeContext'

// import localFont from '@next/font/local'

// not yet supported with turbo
// const myFont = localFont({ src: '../public/fonts/Hind Siliguri Light.ttf' });

const ThemedHtml = ({ children }: { children: React.ReactNode }) => {
  const [darkMode] = useTheme()

  return (
    <html
      className={clsx('myFont.className', {
        dark: darkMode
      })}>
      {children}
    </html>
  )
}

export default ThemedHtml
