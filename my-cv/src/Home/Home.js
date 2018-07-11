import React, { Component } from 'react'

import About from './About'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Profile from './Profile'
import Reference from './Reference'
import Skill from './Skill'

class App extends Component {
  render () {
    return (
      <div className='page-content'>
        <Profile />
        <About />
        <Skill />
        <Portfolio />
        <Experience />
        <Education />
        <Reference />
        <Contact />
      </div>
    )
  }
}

export default App
