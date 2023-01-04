'use client'

// import { useTranslation } from 'next-i18next'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import React, { MutableRefObject, ReactElement, useEffect, useRef, useState } from 'react'

import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../public/logo-no-background.svg'
import { MobileNavigation, Navigation } from './Navigation'
import Settings from './Settings'

type Props = {
  // Add custom props here
}

const Hero: () => Element = (): ReactElement<Props> => {
  const [settings, setSettings] = useState(false)
  const ref: MutableRefObject<null> = useRef(null)

  useEffect((): (() => void) => {
    function handleClickOutside(event: { target: any }): void {
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
          <Navigation />
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
              <MobileNavigation />

              <Image
                alt='Vanessa Aryanata Logo'
                src={logo}
                width={60}
                height={60}
                className='md:hidden'
              />

              <Settings settings={settings} setSettings={setSettings} />
            </div>

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
