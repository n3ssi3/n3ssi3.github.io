import React, { Component } from 'react'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cssClass: ''
    }
  }
  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
    window.addEventListener('scroll', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
    window.removeEventListener('scroll', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    const doc = document.documentElement

    if (((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0) >= 400) &&
      this.state.cssClass === ' navbar-transparent') {
      this.setState({ cssClass: '' })
    } else if (((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0) < 400) &&
      this.state.cssClass === '') {
      this.setState({ cssClass: ' navbar-transparent' })
    }
  }

  render () {
    return (
      <header>
        <div className='profile-page sidebar-collapse'>
          <nav className={'navbar navbar-expand-lg fixed-top bg-primary' + this.state.cssClass} color-on-scroll='400'>
            <div className='container'>
              <div className='navbar-translate'>
                <a className='navbar-brand' href='#' rel='tooltip'>Creative CV</a>
                <button className='navbar-toggler navbar-toggler' type='button' data-toggle='collapse' data-target='#navigation' aria-controls='navigation'
                  aria-expanded='false' aria-label='Toggle navigation'>
                  <span className='navbar-toggler-bar bar1' />
                  <span className='navbar-toggler-bar bar2' />
                  <span className='navbar-toggler-bar bar3' />
                </button>
              </div>
              <div className='collapse navbar-collapse justify-content-end' id='navigation'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a className='nav-link smooth-scroll' href='#about'>About</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link smooth-scroll' href='#skill'>Skills</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link smooth-scroll' href='#portfolio'>Portfolio</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link smooth-scroll' href='#experience'>Experience</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link smooth-scroll' href='#contact'>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
