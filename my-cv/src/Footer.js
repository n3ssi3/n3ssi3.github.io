import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <div className='container text-center'>
          <a className='cc-facebook btn btn-link' href='https://www.facebook.com/nessie.arya'>
            <i className='fab fa-facebook fa-2x ' aria-hidden='true' />
          </a>
          <a className='cc-twitter btn btn-link ' href='https://twitter.com/n3ssi3'>
            <i className='fab fa-twitter fa-2x ' aria-hidden='true' />
          </a>
          <a className='cc-instagram btn btn-link' href='https://www.instagram.com/n3ssi3.m3/'>
            <i className='fab fa-instagram fa-2x ' aria-hidden='true' />
          </a>
        </div>
        <div className='h4 title text-center'>Vanessa Aryanata</div>
      </footer>
    )
  }
}

export default Footer
