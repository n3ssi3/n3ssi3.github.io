import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React from 'react'

import logo from '@/public/images/logo-no-background.svg'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const { t } = useTranslation()

  console.log(logo)
  return (
    <>
      <section className='bg-gradient text-white' id='footer'>
        <footer className='py-20 md:container md:mx-auto'>
          <div className='flex justify-between items-end'>
            <div>
              <div
                style={{
                  backgroundColor: 'white',
                  mask: `url(${logo.src}) no-repeat center / contain`,
                  WebkitMask: `url(${logo.src}) no-repeat center / contain`,
                  height: '120px',
                  width: '120px',
                  margin: '0 auto'
                }}
              />
              <h3 className='text-4xl my-4'>{t('me.name')}</h3>
              <h4 className='text-2xl'>{t('hero.profession')}</h4>
            </div>
            <div className='divide-y'>
              <div className='p-4'>
                <h5 className='text-xl text-gold'>{t('footer.contact')}</h5>
                <p>{t('footer.phone')}</p>
              </div>
              <div className='p-4 pb-0'>
                <h5 className='text-xl text-gold'>{t('footer.hello')}</h5>
                <p>{t('footer.mail')}</p>
              </div>
            </div>
            <div className='socmed'>
              <a href='https://www.facebook.com/nessie.arya' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faFacebook} size='2x' className='mr-3' title='Facebook' />
              </a>
              <a href='https://twitter.com/n3ssi3' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faTwitter} size='2x' className='mr-3' title='Twitter' />
              </a>
              <a href='https://www.instagram.com/n3ssi3.m3' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faInstagram} size='2x' className='mr-3' title='Instagram' />
              </a>
              <a
                href='https://www.linkedin.com/in/vanessa-aryanata'
                target='_blank'
                rel='noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} size='2x' title='Linkedin' />
              </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}

export default Footer
