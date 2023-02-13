import React from 'react'
import './About.css';
import profile from '../../assets/profile.png'


const About = () => {
  return (
    <div id='about' className="about_section section">
        <div className='about_container'>
          <h1>About</h1>
          <div>
            <div className='about_profile'>
              <img src={profile} alt="" />
            </div>
            <div className='about_text_div'>
              <p>
                A self-motivated, hard-working, and ambitious Full Stack Web Developer and a good learner with proficiency in JavaScript. Having a Problem-solving mindset, and 1200+ hrs of hands-on experience in developing fully functional applications. Looking forward to working as a developer and competent employee in an exciting tech company.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About