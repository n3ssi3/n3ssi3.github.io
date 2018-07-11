import React, { Component } from 'react'

class Profile extends Component {
  render () {
    return (
      <section className='profile-page'>
        <div className='wrapper'>
          <div className='page-header page-header-small' filter-color='green'>
            <div className='page-header-image' data-parallax='true' />
            <div className='container'>
              <div className='content-center'>
                <div className='cc-profile-image'>
                  <img src='images/nessa.jpg' alt='Vanessa Aryanata H&auml;nni' />
                </div>
                <div className='h2 title'>Vanessa Aryanata</div>
                <p className='category text-white'>Web Developer, Digital Marketing, Scuba Diving Instructor</p>
                <a className='btn btn-primary smooth-scroll mr-2' href='#contact'
                  data-aos='zoom-in' data-aos-anchor='data-aos-anchor'>Hire Me</a>
                <a className='btn btn-primary' tartet='_blank' href='https://docs.google.com/document/d/1EteBQUjz8jguXokpn00sabFe_MAmVpy0zZwY0uwmhMk/edit?usp=sharing' data-aos='zoom-in' data-aos-anchor='data-aos-anchor'>Download CV</a>
              </div>
            </div>
            <div className='section'>
              <div className='container'>
                <div className='button-container'>
                  <a className='btn btn-default btn-round btn-lg btn-icon' href='https://www.facebook.com/vanessa.haenni' rel='tooltip' title='Follow me on Facebook'>
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

export default Profile
