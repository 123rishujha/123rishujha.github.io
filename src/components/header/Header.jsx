import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css';



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
          <img src='https://yt3.ggpht.com/1e3YYtJVyXfe6LsEZMVs4CvSKoqE4X8Ady_HfYfFzu7IOHfYGf-txJ_BIOy4-jxY0kPxcjmvHw=s88-c-k-c0x00ffffff-no-rj-mo' alt='me' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header

