import React, { Component } from 'react'

class Thankyou extends Component {
  render () {
    return (
      <section className='profile-page'>
        <div className='wrapper'>
          <div className='page-header page-header-small' filter-color='green' style={{
            height: '60vh',
            maxHeight: '440px',
            minHeight: 0
          }}>
            <div className='page-header-image' data-parallax='true' />
            <div className='container'>
              <div className='content-center'>
                <div className='h2 title'>Thank you!</div>
              </div>
            </div>
            <div className='section'>
              <div className='container'>
                <div className='button-container'>
                  <a className='btn btn-default btn-round btn-lg btn-icon' href='#' rel='tooltip' title='Follow me on Facebook'>
                    <i className='fa fa-facebook' />
                  </a>
                  <a className='btn btn-default btn-round btn-lg btn-icon' href='#' rel='tooltip' title='Follow me on Twitter'>
                    <i className='fa fa-twitter' />
                  </a>
                  <a className='btn btn-default btn-round btn-lg btn-icon' href='#' rel='tooltip' title='Follow me on Google+'>
                    <i className='fa fa-google-plus' />
                  </a>
                  <a className='btn btn-default btn-round btn-lg btn-icon' href='#' rel='tooltip' title='Follow me on Instagram'>
                    <i className='fa fa-instagram' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Thankyou
