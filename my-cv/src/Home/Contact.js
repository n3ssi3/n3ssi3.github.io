import React, { Component } from 'react'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '<button class="btn btn-info">Show Email</button>',
      phone: '<button class="btn btn-info">Show Phone Number</button>'
    }
  }

  render () {
    return (
      <section className='section' id='contact'>
        <div className='cc-contact-information'>
          <div className='container cc-contact'>
            <div className='row'>
              <div className='col-md-9'>
                <div className='card mb-0' data-aos='zoom-in'>
                  <div className='h4 text-center title'>Contact Me</div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='card-body'>
                        <form action='https://formspree.io/vanessa.haenni+contact@gmail.com' method='POST'>
                          <input type='hidden' name='_next' value={window.location.hostname + '/thankyou'} />
                          <div className='p pb-3'>
                            <strong>Feel free to contact me </strong>
                          </div>
                          <div className='row mb-3'>
                            <div className='col'>
                              <div className='input-group'>
                                <span className='input-group-addon'>
                                  <i className='fa fa-user-circle' />
                                </span>
                                <input className='form-control' type='text' name='name' placeholder='Name' required='required' />
                              </div>
                            </div>
                          </div>
                          <div className='row mb-3'>
                            <div className='col'>
                              <div className='input-group'>
                                <span className='input-group-addon'>
                                  <i className='fa fa-file-alt' />
                                </span>
                                <input className='form-control' type='text' name='Subject' placeholder='Subject' required='required' />
                              </div>
                            </div>
                          </div>
                          <div className='row mb-3'>
                            <div className='col'>
                              <div className='input-group'>
                                <span className='input-group-addon'>
                                  <i className='fa fa-envelope' />
                                </span>
                                <input className='form-control' type='email' name='_replyto' placeholder='E-mail' required='required' />
                              </div>
                            </div>
                          </div>
                          <div className='row mb-3'>
                            <div className='col'>
                              <div className='form-group'>
                                <textarea className='form-control' name='message' placeholder='Your Message' required='required'></textarea>
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col'>
                              <button className='btn btn-primary' type='submit'>Send</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='card-body'>
                        <p className='mb-0'>
                          <strong>Address </strong>
                        </p>
                        <p className='pb-2'>Zurich, Switzerland</p>
                        <p className='mb-0'>
                          <strong>Phone</strong>
                        </p>
                        <p className='pb-2' onClick={() => { this.setState({
                          phone: '<a href="tel:+41788726843">+41 78 872 6243</a>' }) }}>
                          <span dangerouslySetInnerHTML={{ __html: this.state.phone }} />
                        </p>
                        <p className='mb-0'>
                          <strong>Email</strong>
                        </p>
                        <p onClick={() => { this.setState({ email: '<a href="mailto:vanessa.haenni@gmail.com">vanessa.haenni@gmail.com</a>' }) }}>
                          <span dangerouslySetInnerHTML={{ __html: this.state.email }} />
                        </p>
                      </div>
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

export default Contact
