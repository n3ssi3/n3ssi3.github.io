import React from 'react'

const Work = () => (
  <section className='md:container md:mx-auto'>
    <h2 id='work' className='sr-only'>
      Work Experience
    </h2>
    <div className='grid grid-cols-3 md:grid-cols-4 gap-4'>
      <div className='relative min-h-[450px]'>
        <h3 className='rotate-[270deg] whitespace-nowrap absolute text-gradient tracking-wide text-4xl font-bold uppercase top-[40%] right-[-45%]'>
          Vanessa Aryanata
        </h3>
      </div>
      <div className='col-span-3 dark:text-white'>
        <div className='grid gap-4 grid-cols-2'>
          <div className='history'>
            <h5 className='title-timeline use-text-subtitle'>WORK EXPERIENCE</h5>
            <ul>
              <li>
                <div
                  className='wow fadeInLeftShort'
                  data-wow-offset='100'
                  data-wow-duration='0.3s'
                  // style="visibility: visible; animation-duration: 0.3s; animation-name: fadeInLeftShort;"
                >
                  <div>
                    <h3 className='use-text-subtitle2 pb-2'>Creative Director</h3>
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
                    <h3 className='use-text-subtitle2 pb-2'>Senior UI/UX Designer</h3>
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
                    <h3 className='use-text-subtitle2 pb-2'>UI/UX Designer</h3>
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
                    <h3 className='use-text-subtitle2 pb-2'>UI/UX Designer</h3>
                    <p className='mb-2'>at First Company</p>
                    <p className='time'>2009 - 2011</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className='progress-wrap'>
            <h5 className='title-timeline use-text-subtitle'>SKILL AND EXPERTISE</h5>
            <ul className='' id='progress'>
              <li>
                <div className='text-icon'>
                  <i className='ion-wand'></i>
                  <h5 className='use-text-subtitle2'>UI Interface Design</h5>
                </div>
                <div className='progress'>
                  <div
                    className='determinate progress-linear'
                    // style="width: 80%"
                  ></div>
                </div>
              </li>
              <li>
                <div className='text-icon'>
                  <i className='ion-social-dribbble-outline'></i>
                  <h5 className='use-text-subtitle2'>Icon Design</h5>
                </div>
                <div className='progress'>
                  <div
                    className='determinate progress-linear'
                    // style="width: 70%"
                  ></div>
                </div>
              </li>
              <li>
                <div className='text-icon'>
                  <i className='ion-ios-world-outline'></i>
                  <h5 className='use-text-subtitle2'>HTML Prototyping</h5>
                </div>
                <div className='progress'>
                  <div
                    className='determinate progress-linear'
                    // style="width: 60%"
                  ></div>
                </div>
              </li>
              <li>
                <div className='text-icon'>
                  <i className='ion-ios-camera-outline'></i>
                  <h5 className='use-text-subtitle2'>Photo Editing</h5>
                </div>
                <div className='progress'>
                  <div
                    className='determinate progress-linear'
                    // style="width: 90%"
                  ></div>
                </div>
              </li>
              <li>
                <div className='text-icon'>
                  <i className='ion-ios-snowy'></i>
                  <h5 className='use-text-subtitle2'>Graphic Illustrations</h5>
                </div>
                <div className='progress'>
                  <div
                    className='determinate progress-linear'
                    // style="width: 80%"
                  ></div>
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
