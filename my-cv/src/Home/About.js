import React, { Component } from 'react'

class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '<button class="btn btn-info">Show Email</button>',
      phone: '<button class="btn btn-info">Show Phone Number</button>'
    }
  }

  render () {
    return (
      <section className='section' id='about'>
        <div className='container'>
          <div className='card' data-aos='fade-up' data-aos-offset='10'>
            <div className='row'>
              <div className='col-lg-6 col-md-12'>
                <div className='card-body'>
                  <div className='h4 mt-0 title'>About</div>
                  <p>Hello! I am Vanessa Aryanata-H&auml;nni, a pationate Javascript / Web Developer and currently employed as a Digital (Marketing) Manager.</p>
                  <p>As an experienced digital marketing manager and online sales manager, my tenacious and proactive approach resulted in numerous important contract wins.<br />
                    Currently I am seeking a new challenge which will utilise my meticulous attention to detail, and friendly, professional manner.</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-12'>
                <div className='card-body'>
                  <div className='h4 mt-0 title'>Basic Information</div>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <strong className='text-uppercase'>Age:</strong>
                    </div>
                    <div className='col-sm-8'>29</div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-sm-4'>
                      <strong className='text-uppercase'>Email:</strong>
                    </div>
                    <div className='col-sm-8' onClick={() => { this.setState({ email: '<a href="mailto:vanessa.haenni@gmail.com">vanessa.haenni@gmail.com</a>' }) }}>
                      <span dangerouslySetInnerHTML={{ __html: this.state.email }} />
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-sm-4'>
                      <strong className='text-uppercase'>Phone:</strong>
                    </div>
                    <div className='col-sm-8' onClick={() => {
                      this.setState({
                        phone: '<a href="tel:+628113864152">+62 811 386 4152</a>'
                      })
                    }}>
                      <span dangerouslySetInnerHTML={{ __html: this.state.phone }} />
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-sm-4'>
                      <strong className='text-uppercase'>Address:</strong>
                    </div>
                    <div className='col-sm-8'><p>Tulamben, Kubu, Bali, Indonesia<br /><i>Willing to relocate</i></p></div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-sm-4'>
                      <strong className='text-uppercase'>Languages:</strong>
                    </div>
                    <div className='col-sm-8'>
                      German, English, Indonesian, French, Balinese
                      {/* <div className='progress-container progress-primary'>
                        <span className='progress-badge'>German</span>
                        <div className='progress'>
                          <div className='progress-bar progress-bar-primary' data-aos='progress-full' data-aos-offset='10' data-aos-duration='2000' role='progressbar'
                            aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{ width: '100%' }} />
                          <span className='progress-value'>native</span>
                        </div>
                      </div>
                      <div className='progress-container progress-primary'>
                        <span className='progress-badge'>English</span>
                        <div className='progress'>
                          <div className='progress-bar progress-bar-primary' data-aos='progress-full' data-aos-offset='10' data-aos-duration='2000' role='progressbar'
                            aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{ width: '90%' }} />
                          <span className='progress-value'>Business Level</span>
                        </div>
                      </div>
                      <div className='progress-container progress-primary'>
                        <span className='progress-badge'>Indonesian</span>
                        <div className='progress'>
                          <div className='progress-bar progress-bar-primary' data-aos='progress-full' data-aos-offset='10' data-aos-duration='2000' role='progressbar'
                            aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{ width: '60%' }} />
                          <span className='progress-value'>Conversation Level</span>
                        </div>
                      </div>
                      <div className='progress-container progress-primary'>
                        <span className='progress-badge'>French</span>
                        <div className='progress'>
                          <div className='progress-bar progress-bar-primary' data-aos='progress-full' data-aos-offset='10' data-aos-duration='2000' role='progressbar'
                            aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{ width: '50%' }} />
                          <span className='progress-value'>Used to be fluent</span>
                        </div>
                      </div>
                      <div className='progress-container progress-primary'>
                        <span className='progress-badge'>Balinese</span>
                        <div className='progress'>
                          <div className='progress-bar progress-bar-primary' data-aos='progress-full' data-aos-offset='10' data-aos-duration='2000' role='progressbar'
                            aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{ width: '20%' }} />
                          <span className='progress-value'>Beginner Level</span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
