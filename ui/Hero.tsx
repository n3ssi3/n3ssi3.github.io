'use client'

import { useTheme } from 'app/ThemeContext'
import clsx from 'clsx'
// import { useTranslation } from 'next-i18next'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Bahasa from '../public/Bahasa.svg'
import English from '../public/English.svg'
import French from '../public/French.svg'
import German from '../public/German.svg'
import logo from '../public/logo-no-background.svg'

type Props = {
  // Add custom props here
}

const Hero = () => {
  const [darkMode, setDarkMode] = useTheme()
  const t = string => string
  // const { t } = useTranslation('hero')
  const [settings, setSettings] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        setSettings(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref])

  return (
    <section className='md:container md:mx-auto'>
      <div className='grid grid-cols-3 md:grid-cols-4 gap-4'>
        <nav className='py-8 hidden md:block'>
          <Image alt='Vanessa Aryanata Logo' src={logo} width={80} height={80} />
          <ul className='dark:text-white'>
            <li className='p-4'>Home</li>
          </ul>
        </nav>
        <main className='col-span-3'>
          <div
            className='relative'
            style={{
              background:
                'url(https://res.cloudinary.com/imajin/image/upload/v1583588473/profile/banner_cylvs2.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <div className='hero-overlay'></div>

            <div
              className='relative p-10 pb-0 lg:pt-10 flex justify-between md:justify-end'
              ref={ref}>
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                data-collapse-toggle='navbar-default'
                type='button'
                className='inline-flex items-center relative md:hidden rounded-lg text-white focus:outline-none dark:text-black'
                aria-controls='navbar-default'
                aria-expanded='false'>
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clipRule='evenodd'></path>
                </svg>
              </button>

              {/* <div
                className="absolute top-10 right-10 text-right text-white dark:text-black"
                ref={ref}
              > */}
              <button
                type='button'
                className='text-white dark:text-black z-10'
                onClick={() => setSettings(!settings)}>
                <FontAwesomeIcon icon={faGear} size='lg' />
              </button>
              <div
                className={clsx('absolute bg-zinc-800 text-white p-4 z-20 mt-2 top-full right-10', {
                  block: settings,
                  hidden: !settings
                })}>
                <ul className='divide-y divide-gold'>
                  <li className='pb-4 flex justify-between'>
                    <span className='font-semibold capitalize'>Theme mode</span>
                    <button
                      className='rounded-lg ml-2 px-3 py-1 text-sm font-medium bg-zinc-700 text-zinc-100 hover:bg-zinc-500 hover:text-white'
                      onClick={() => setDarkMode(!darkMode)}>
                      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                      <span className='ml-2 hidden md:block'>
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
            </div>
            {/* </div> */}

            <div className='relative z-10 w-full text-white dark:text-black top-0 left-0 p-10 pt-5 lg:pt-10 lg:px-32'>
              <h4 className='text-xl xl:text-2xl mb-2'>Hello World,</h4>
              <h2 className='text-2xl xl:text-6xl mb-4'>
                I am Vanessa,
                <br />
                Web Developer
              </h2>
              <h5 className='xl:text-xl mb-4'>
                I create an efficient frontend web developer who specializes in React.js.
              </h5>
            </div>

            <div className='relative z-10 w-full whitespace-nowrap text-center sm:text-left text-white dark:text-black pb-10 px-10 lg:px-32'>
              <a href='https://www.facebook.com/nessie.arya' target='_blank'>
                <FontAwesomeIcon icon={faFacebook} size='2x' className='mr-3' />
              </a>
              <a href='https://twitter.com/n3ssi3' target='_blank'>
                <FontAwesomeIcon icon={faTwitter} size='2x' className='mr-3' />
              </a>
              <a href='https://www.instagram.com/n3ssi3.m3' target='_blank'>
                <FontAwesomeIcon icon={faInstagram} size='2x' className='mr-3' />
              </a>
              <a href='https://www.linkedin.com/in/vanessa-aryanata' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </a>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}

// export const getServerSideProps: GetServerSideProps<Props> = async ({
//   locale,
// }) => {
//   console.log(locale)
//   return {}
//   // return ({
//   //   props: {
//   //     ...(await serverSideTranslations(locale ?? 'en', [
//   //       'hero',
//   //     ])),
//   //   },
//   // })
// }

export default Hero
