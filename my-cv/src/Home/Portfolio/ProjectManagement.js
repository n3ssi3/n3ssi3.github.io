import React, { Component } from 'react'

class Photography extends Component {
  render () {
    return (
      <div className='ml-auto mr-auto'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='cc-porfolio-image img-raised' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
              <a href='#Photography'>
                <figure className='cc-effect'>
                  <img src='images/photography-1.jpg' alt='Image' />
                  <figcaption>
                    <div className='h4'>Photoshoot</div>
                    <p>Photography</p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className='cc-porfolio-image img-raised' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
              <a href='#Photography'>
                <figure className='cc-effect'>
                  <img src='images/photography-3.jpg' alt='Image' />
                  <figcaption>
                    <div className='h4'>Wedding Photoshoot</div>
                    <p>Photography</p>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='cc-porfolio-image img-raised' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
              <a href='#Photography'>
                <figure className='cc-effect'>
                  <img src='images/photography-2.jpg' alt='Image' />
                  <figcaption>
                    <div className='h4'>Beach Photoshoot</div>
                    <p>Photography</p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className='cc-porfolio-image img-raised' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
              <a href='#Photography'>
                <figure className='cc-effect'>
                  <img src='images/photography-4.jpg' alt='Image' />
                  <figcaption>
                    <div className='h4'>Nature Photoshoot</div>
                    <p>Photography</p>
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

export default Photography
