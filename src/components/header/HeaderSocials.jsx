import React from 'react'
import './header.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com"><BsLinkedin/></a>
        <a href="https://github.com"><FaGithub /> </a>
        <a href="https://github.com"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials
