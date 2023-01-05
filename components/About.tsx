import Image from 'next/image'
import React from 'react'

import profile from '../public/profile.jpg'

const About = () => (
  <section className='md:container md:mx-auto'>
    <h2 id='about' className='sr-only'>
      About me
    </h2>
    <div className='grid md:grid-cols-4 gap-4'>
      <div className='md:col-start-2 md:col-span-3'>
        <div className='grid grid-cols-3 md:grid-cols-4 pt-10 lg:justify-around'>
          <div className='text-center mb-4'>
            <figure className='h-[70px] mb-4'>
              <img
                src='https://luxione.vercel.app/profile/assets/images/profile/reward1.svg'
                alt='badge'
                className='md:max-w-[50%] max-h-full mx-auto'
              />
            </figure>
            <p className='text-gold hidden md:block'>Special Mention</p>
            <h5 className='text-gold hidden md:block text-xl uppercase font-semibold'>Awards</h5>
          </div>
          <div className='text-center mb-4'>
            <figure className='h-[70px] mb-4'>
              <img
                src='https://luxione.vercel.app/profile/assets/images/profile/reward2.svg'
                alt='badge'
                className='md:max-w-[50%] max-h-full mx-auto'
              />
            </figure>
            <p className='text-gold hidden md:block'>100k videos</p>
            <h5 className='text-gold hidden md:block text-xl uppercase font-semibold'>
              Subscriber
            </h5>
          </div>
          <div className='text-center mb-4'>
            <figure className='h-[70px] mb-4'>
              <img
                src='https://luxione.vercel.app/profile/assets/images/profile/reward3.svg'
                alt='badge'
                className='md:max-w-[50%] max-h-full mx-auto'
              />
            </figure>
            <p className='text-gold hidden md:block'>Best Filmography</p>
            <h5 className='text-gold hidden md:block text-xl uppercase font-semibold'>Footage</h5>
          </div>
          <div className='col-span-3 row-span-3 md:col-span-1 mb-10 md:mb-4 md:-mt-[100px] xl:-mt-[200px] z-20'>
            <div className='relative xl:w-64 mx-auto'>
              <figure>
                <Image
                  alt='Vanessa Aryanata'
                  src={profile}
                  width={256}
                  height={370}
                  className='mx-auto'
                />
              </figure>
              <span className='frame'></span>
            </div>
          </div>
        </div>
        <div className='line hidden lg:block'></div>
      </div>
    </div>
  </section>
)

export default About
