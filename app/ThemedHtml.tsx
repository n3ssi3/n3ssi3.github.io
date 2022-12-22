'use client'

import clsx from 'clsx'
import React from 'react'

import { useTheme } from './ThemeContext'

const ThemedHtml = ({ children }: { children: React.ReactNode }) => {
  const [darkMode] = useTheme()

  return (
    <html
      className={clsx({
        dark: darkMode
      })}>
      {children}
    </html>
  )
}

export default ThemedHtml
