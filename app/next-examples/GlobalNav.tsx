'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

import { demos } from '@/lib/demos'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTheme } from '../ThemeContext'

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments()
  const [darkMode, setDarkMode] = useTheme()

  return (
    <div className='space-y-5'>
      <button
        className='rounded-lg px-3 py-1 text-sm font-medium bg-zinc-700 text-zinc-100 hover:bg-zinc-500 hover:text-white'
        onClick={() => setDarkMode(!darkMode)}>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {demos.map(demo => {
        return (
          <div key={demo.name}>
            <div className='mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500'>
              <div>{demo.name}</div>
            </div>

            {demo.items.map(item => {
              const isActive = item.slug === selectedLayoutSegments

              return (
                <div key={item.slug}>
                  {item.isDisabled ? (
                    <div
                      className='block rounded-md px-3 py-2 text-sm font-medium text-zinc-600'
                      title='Coming Soon'>
                      {item.name}
                    </div>
                  ) : (
                    <Link
                      href={`/${item.slug}`}
                      className={clsx(
                        'block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100',
                        { 'dark:text-zinc-400': !isActive, 'dark:text-white': isActive }
                      )}>
                      {item.name}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
