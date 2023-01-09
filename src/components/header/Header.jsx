import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css';
import Profile from '../../assets/profile.png';



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rishu Jha</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className='me'>
          <img src={Profile} alt='me' style={{width:'100',height:'100%',objectFit:'fill'}} />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header

