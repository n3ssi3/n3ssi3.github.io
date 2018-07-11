import React, { Component } from 'react'

class Design extends Component {
  render () {
    return (
      <div className='ml-auto mr-auto'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='cc-porfolio-image img-raised' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
              <a href='#graphic-design'>
                <figure className='cc-effect'>
                  <img src='images/graphic-design-1.jpg' alt='Image' />
                  <figcaption>
                    <div className='h4'>Triangle Pattern</div>
                    <p>Graphic Design</p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className='cc-porfolio-image img-raised' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
              <a href='#graphic-design'>
                <figure className='cc-effect'>
                  <img src='images/graphic-design-2.jpg' alt='Image' />
                  <figcaption>
                    <div className='h4'>Abstract Umbrella</div>
                    <p>Graphic Design</p>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='cc-porfolio-image img-raised' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
              <a href='#graphic-design'>
                <figure className='cc-effect'>
                  <img src='images/graphic-design-3.jpg' alt='Image' />
                  <figcaption>
                    <div className='h4'>Cube Surface Texture</div>
                    <p>Graphic Design</p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className='cc-porfolio-image img-raised' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
              <a href='#graphic-design'>
                <figure className='cc-effect'>
                  <img src='images/graphic-design-4.jpg' alt='Image' />
                  <figcaption>
                    <div className='h4'>Abstract Line</div>
                    <p>Graphic Design</p>
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

export default Design
