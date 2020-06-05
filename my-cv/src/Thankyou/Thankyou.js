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
                <p>I will get back to you as soon as I can.</p>
              </div>
            </div>
            <div className='section'>
              <div className='container'>
                <div className='button-container'>
                  <a className='btn btn-default btn-round btn-lg btn-icon' href='https://www.facebook.com/vanessa.aryanata' rel='tooltip' title='Follow me on Facebook'>
                    <i className='fab fa-facebook' />
                  </a>
                  <a className='btn btn-default btn-round btn-lg btn-icon' href='https://twitter.com/n3ssi3' rel='tooltip' title='Follow me on Twitter'>
                    <i className='fab fa-twitter' />
                  </a>
                  <a className='btn btn-default btn-round btn-lg btn-icon' href='https://plus.google.com/u/1/+vanessahänni' rel='tooltip' title='Follow me on Google+'>
                    <i className='fab fa-google-plus' />
                  </a>
                  <a className='btn btn-default btn-round btn-lg btn-icon' href='https://www.instagram.com/n3ssi3.m3/' rel='tooltip' title='Follow me on Instagram'>
                    <i className='fab fa-instagram' />
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
