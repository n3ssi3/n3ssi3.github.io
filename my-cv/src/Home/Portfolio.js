import React, { Component } from 'react'

import Web from './Portfolio/Web'
import Design from './Portfolio/Design'
import ProjectManagement from './Portfolio/ProjectManagement'

class Portfolio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 'web-development'
    }
  }

  render () {
    return (
      <section className='section' id='portfolio'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 ml-auto mr-auto'>
              <div className='h4 text-center mb-4 title'>Portfolio</div>
              <div className='nav-align-center'>
                <ul className='nav nav-pills nav-pills-primary' role='tablist'>
                  <li className='nav-item' onClick={(e) => {this.setState({active: 'web-development'}) }}>
                    <a className={'nav-link' + (this.state.active === 'web-development' ? ' active' : '')} onClick={(e) => {
                      e.preventDefault()
                      this.setState({active: 'web-development'})
                    }} data-toggle='tab' href='#web-development' role='tablist'>
                      <i className='fa fa-laptop' aria-hidden='true' />
                    </a>
                  </li>
                  {/* <li className='nav-item' onClick={(e) => {this.setState({active: 'graphic-design'}) }}>
                    <a className={'nav-link' + (this.state.active === 'graphic-design' ? ' active' : '')} onClick={(e) => {
                      e.preventDefault()
                      this.setState({active: 'graphic-design'})
                    }} data-toggle='tab' href='#graphic-design' role='tablist'>
                      <i className='fa fa-image' aria-hidden='true' />
                    </a>
                  </li> */}
                  <li className='nav-item' onClick={(e) => {this.setState({active: 'project-diagram'}) }}>
                    <a className={'nav-link' + (this.state.active === 'project-diagram' ? ' active' : '')} onClick={(e) => {
                      e.preventDefault()
                      this.setState({active: 'project-diagram'})
                    }} data-toggle='tab' href='#project-diagram' role='tablist'>
                      <i className='fas fa-project-diagram' aria-hidden='true' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='tab-content gallery mt-5'>
            <div className={'tab-pane' + (this.state.active === 'web-development' ? ' active' : '')} id='web-development'>
              <Web />
            </div>
            <div className={'tab-pane' + (this.state.active === 'graphic-design' ? ' active' : '')} id='graphic-design' role='tabpanel'>
              <Design />
            </div>
            <div className={'tab-pane' + (this.state.active === 'project-diagram' ? ' active' : '')} id='project-diagram' role='tabpanel'>
              <ProjectManagement />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio
