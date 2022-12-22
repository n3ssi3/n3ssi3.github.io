'use client'

import { useTheme } from 'app/ThemeContext'
import clsx from 'clsx'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Bahasa from '../public/Bahasa.svg'
import English from '../public/English.svg'
import French from '../public/French.svg'
import German from '../public/German.svg'
import logo from '../public/logo-no-background.svg'

export default function Hero() {
  const [darkMode, setDarkMode] = useTheme()
  const [settings, setSettings] = useState(false)
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
    <section className='container mx-auto'>
      <div className='grid grid-cols-4 gap-4'>
        <nav className='py-8'>
          <Image alt='Vanessa Aryanata Logo' src={logo} width={80} height={80} />
          <ul className='dark:text-white'>
            <li className='p-4'>Home</li>
          </ul>
        </nav>
        <main className='col-span-3'>
          <div className='relative'>
            <div className='absolute w-full'>
              <img
                src='https://res.cloudinary.com/imajin/image/upload/v1583588473/profile/banner_cylvs2.jpg'
                className='w-full'
                alt='Vanessa Aryanata'
              />
              <div className='hero-overlay'></div>
            </div>
            <div
              className='absolute top-10 right-10 text-right text-white dark:text-black'
              ref={ref}>
              <button type='button' onClick={() => setSettings(!settings)}>
                <FontAwesomeIcon icon={faGear} size='2x' />
              </button>
              <div
                className={clsx('bg-zinc-800 text-white p-4', {
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
                      <span className='ml-2'>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>
                  </li>
                  <li className='pt-4 flex justify-between'>
                    <span className='font-semibold capitalize'>Language</span>
                    <ul>
                      <li>
                        <a data-lang='en' href='#' className='flex mb-1'>
                          <Image alt='English' src={English} width={30} height={20} />
                          <span className='ml-2'>English</span>
                        </a>
                      </li>
                      <li>
                        <a data-lang='de' href='#' className='flex mb-1'>
                          <Image alt='German' src={German} width={30} height={20} />
                          <span className='ml-2'>Deutsch</span>
                        </a>
                      </li>
                      <li>
                        <a data-lang='fr' href='#' className='flex mb-1'>
                          <Image alt='French' src={French} width={30} height={20} />
                          <span className='ml-2'>Français</span>
                        </a>
                      </li>
                      <li>
                        <a data-lang='id' href='#' className='flex mb-1'>
                          <Image alt='Bahasa' src={Bahasa} width={30} height={20} />
                          <span className='ml-2'>󠁥󠁮󠁧󠁿Indonesia</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className='text'>
              <h4 className='use-text-title2'>Hello World,</h4>
              <h2 className='use-text-title'>I am Jena, UI Designer</h2>
              <div className='hidden-sm-down'>
                <h5 className='use-text-subtitle2'>
                  I create an efficient UI mobile or web design also UX research to make sure that I
                  get what people needs and strategy for interaction design.
                </h5>
                <div className='socmed'>
                  <a className='btn-icon margin waves-effect' href='#'>
                    <i className='ion-social-facebook'></i>
                  </a>{' '}
                  <a className='btn-icon margin waves-effect' href='#'>
                    <i className='ion-social-twitter'></i>
                  </a>{' '}
                  <a className='btn-icon margin waves-effect' href='#'>
                    <i className='ion-social-instagram'></i>
                  </a>{' '}
                  <a className='btn-icon margin waves-effect' href='#'>
                    <i className='ion-social-linkedin'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
