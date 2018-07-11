import React, { Component } from 'react'

class Web extends Component {
  render () {
    return (
      <div className='ml-auto mr-auto'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='cc-porfolio-image img-raised' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
              <a href='#web-development'>
                <figure className='cc-effect'>
                  <img src='images/project-1.jpg' alt='Image' />
                  <figcaption>
                    <div className='h4'>Recent Project</div>
                    <p>Web Development</p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className='cc-porfolio-image img-raised' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
              <a href='#web-development'>
                <figure className='cc-effect'>
                  <img src='images/project-2.jpg' alt='Image' />
                  <figcaption>
                    <div className='h4'>Startup Project</div>
                    <p>Web Development</p>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='cc-porfolio-image img-raised' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
              <a href='#web-development'>
                <figure className='cc-effect'>
                  <img src='images/project-3.jpg' alt='Image' />
                  <figcaption>
                    <div className='h4'>Food Order Project</div>
                    <p>Web Development</p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className='cc-porfolio-image img-raised' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
              <a href='#web-development'>
                <figure className='cc-effect'>
                  <img src='images/project-4.jpg' alt='Image' />
                  <figcaption>
                    <div className='h4'>Web Advertising Project</div>
                    <p>Web Development</p>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Web
