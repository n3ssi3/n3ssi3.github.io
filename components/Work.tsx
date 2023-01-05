import React from 'react'

const Work = () => (
  <section className='md:container md:mx-auto'>
    <h2 id='work' className='sr-only'>
      Work Experience
    </h2>
    <div className='grid grid-cols-3 lg:grid-cols-4 gap-4'>
      <div className='relative min-h-[450px] hidden lg:block'>
        <h3 className='rotate-[270deg] whitespace-nowrap absolute text-gradient tracking-wide text-4xl font-bold uppercase top-[40%] right-[-45%]'>
          Vanessa Aryanata
        </h3>
      </div>
      <div className='col-span-3 dark:text-white'>
        <div className='grid gap-4 grid-cols-2'>
          <div className='history'>
            <h5 className='text-2xl text-violet font-semibold'>WORK EXPERIENCE</h5>
            <ul>
              <li>
                <div
                  className='wow fadeInLeftShort'
                  data-wow-offset='100'
                  data-wow-duration='0.3s'
                  // style="visibility: visible; animation-duration: 0.3s; animation-name: fadeInLeftShort;"
                >
                  <div>
                    <h3 className='font-semibold text-lg'>Creative Director</h3>
                    <p className='mb-2'>at Fourth Company</p>
                    <p className='time'>2015 - Present</p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className='wow fadeInLeftShort'
                  data-wow-offset='100'
                  data-wow-duration='0.3s'
                  // style="visibility: visible; animation-duration: 0.3s; animation-name: fadeInLeftShort;"
                >
                  <div>
                    <h3 className='font-semibold text-lg'>Senior UI/UX Designer</h3>
                    <p className='mb-2'>at Third Company</p>
                    <p className='time'>2013 - 2015</p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className='wow fadeInLeftShort'
                  data-wow-offset='100'
                  data-wow-duration='0.3s'
                  // style="visibility: visible; animation-duration: 0.3s; animation-name: fadeInLeftShort;"
                >
                  <div>
                    <h3 className='font-semibold text-lg'>UI/UX Designer</h3>
                    <p className='mb-2'>at Second Company</p>
                    <p className='time'>2012 - 2013</p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className='wow fadeInLeftShort'
                  data-wow-offset='100'
                  data-wow-duration='0.3s'
                  // style="visibility: visible; animation-duration: 0.3s; animation-name: fadeInLeftShort;"
                >
                  <div>
                    <h3 className='font-semibold text-lg'>UI/UX Designer</h3>
                    <p className='mb-2'>at First Company</p>
                    <p className='time'>2009 - 2011</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className='progress-wrap'>
            <h5 className='text-2xl text-violet font-semibold'>SKILL AND EXPERTISE</h5>
            <ul className='' id='progress'>
              <li>
                <div className='text-icon'>
                  <i className='ion-wand'></i>
                  <h5 className='font-semibold text-lg'>UI Interface Design</h5>
                </div>
                <div className='relative'>
                  <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                  <div
                    className='bg-gradient rounded-md h-5 transition-[width]'
                    style={{ width: '80%' }}>
                    <p className='sr-only'>80%</p>
                  </div>
                </div>
              </li>
              <li>
                <div className='text-icon'>
                  <i className='ion-social-dribbble-outline'></i>
                  <h5 className='font-semibold text-lg'>Icon Design</h5>
                </div>
                <div className='relative'>
                  <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                  <div
                    className='bg-gradient rounded-md h-5 transition-[width]'
                    style={{ width: '70%' }}>
                    <p className='sr-only'>70%</p>
                  </div>
                </div>
              </li>
              <li>
                <div className='text-icon'>
                  <i className='ion-ios-world-outline'></i>
                  <h5 className='font-semibold text-lg'>HTML Prototyping</h5>
                </div>
                <div className='relative'>
                  <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                  <div
                    className='bg-gradient rounded-md h-5 transition-[width]'
                    style={{ width: '60%' }}>
                    <p className='sr-only'>60%</p>
                  </div>
                </div>
              </li>
              <li>
                <div className='text-icon'>
                  <i className='ion-ios-camera-outline'></i>
                  <h5 className='font-semibold text-lg'>Photo Editing</h5>
                </div>
                <div className='relative'>
                  <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                  <div
                    className='bg-gradient rounded-md h-5 transition-[width]'
                    style={{ width: '90%' }}>
                    <p className='sr-only'>90%</p>
                  </div>
                </div>
              </li>
              <li>
                <div className='text-icon'>
                  <i className='ion-ios-snowy'></i>
                  <h5 className='font-semibold text-lg'>Graphic Illustrations</h5>
                </div>
                <div className='relative'>
                  <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                  <div
                    className='bg-gradient rounded-md h-5 transition-[width]'
                    style={{ width: '80%' }}>
                    <p className='sr-only'>80%</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Work
