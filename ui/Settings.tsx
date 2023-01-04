import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTheme } from 'app/ThemeContext'

import Bahasa from '../public/Bahasa.svg'
import English from '../public/English.svg'
import French from '../public/French.svg'
import German from '../public/German.svg'

const Settings = ({ settings, setSettings, setIsNavOpen }) => {
  const t = string => string
  // const { t } = useTranslation('hero')

  const [darkMode, setDarkMode] = useTheme()
  return (
    <>
      <button
        type='button'
        className='text-white dark:text-black z-10'
        onClick={() => {
          setSettings(!settings)
          setIsNavOpen(false)
        }}>
        <FontAwesomeIcon icon={faGear} size='lg' />
      </button>
      <div
        className={clsx(
          'absolute bg-zinc-800 text-white p-4 z-50 mt-2 w-full sm:w-auto top-full right-0',
          {
            block: settings,
            hidden: !settings
          }
        )}>
        <ul className='divide-y divide-gold'>
          <li className='pb-4 flex justify-between'>
            <span className='font-semibold capitalize'>Theme mode</span>
            <button
              className='rounded-lg whitespace-nowrap ml-2 px-3 py-1 text-sm font-medium bg-zinc-700 text-zinc-100 hover:bg-zinc-500 hover:text-white'
              onClick={() => setDarkMode(!darkMode)}>
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              <span className='ml-2 hidden md:inline-block'>
                {darkMode ? t('mode.light') : t('mode.dark')}
              </span>
            </button>
          </li>
          <li className='pt-4 flex justify-between'>
            <span className='font-semibold capitalize'>Language</span>
            <ul>
              <li>
                <Link href='/' locale='en'>
                  <button className='flex mb-1'>
                    <Image alt={t('language.en')} src={English} width={30} height={20} />
                    <span className='ml-2 hidden md:block'>{t('language.en')}</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link href='/' locale='de'>
                  <button className='flex mb-1'>
                    <Image alt={t('language.de')} src={German} width={30} height={20} />
                    <span className='ml-2 hidden md:block'>{t('language.de')}</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link href='/' locale='fr'>
                  <button className='flex mb-1'>
                    <Image alt={t('language.fr')} src={French} width={30} height={20} />
                    <span className='ml-2 hidden md:block'>{t('language.fr')}</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link href='/' locale='id'>
                  <button className='flex mb-1'>
                    <Image alt={t('language.id')} src={Bahasa} width={30} height={20} />
                    <span className='ml-2 hidden md:block'>{t('language.id')}</span>
                  </button>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Settings
