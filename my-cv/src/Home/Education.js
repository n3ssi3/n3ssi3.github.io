import React, { Component } from 'react'

class Education extends Component {
  render () {
    return (
      <section className='section'>
        <div className='container cc-education'>
          <div className='h4 text-center mb-4 title'>Education</div>
          <div className='card'>
            <div className='row'>
              <div className='col-md-3 bg-primary' data-aos='fade-right' data-aos-offset='50' data-aos-duration='500'>
                <div className='card-body cc-education-header'>
                  <p>2004 - 2008</p>
                  <div className='h5'>High School</div>
                </div>
              </div>
              <div className='col-md-9' data-aos='fade-left' data-aos-offset='50' data-aos-duration='500'>
                <div className='card-body'>
                  <div className='h5'>Computer Science</div>
                  <p className='category'>Kantonsschule Hottingen</p>
                  <p>4 years of high school with focus on economics and information technology. Part of the education is an internship in a company where you also have to write your thesis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Education
