import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import Home from './Home/Home'
import Thankyou from './Thankyou/Thankyou'

import './styles/scss/App.scss'

class App extends Component {
  render () {
    return (
      <div id='top'>
        <Header />
        <Router>
          <div className='page-content'>
            <Route path='/' exact component={Home} />
            <Route path='/thankyou' component={Thankyou} />
          </div>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App
