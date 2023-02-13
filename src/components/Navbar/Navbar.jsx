import React from 'react'
import './Navbar.css';
import cv from '../../assets/resume.pdf';
import { useState } from 'react';
import {RxCross1} from 'react-icons/rx';

const Navbar = () => {

  const [top,setTop] = useState(`-2000`);
  const [active,setActive] = useState('#home');
  

  return (
    <div id='nav-menu' className='MainNavbar'>
      <div className='NavbarHolder'>
        <a href="#home" onClick={()=>setActive("#home")} className={active==='#home' ? 'active nav-link home' : 'nav-link home' }>Home</a>
        <a href="#about" onClick={()=>setActive("#about")} className={active==='#about' ? 'active nav-link about' : 'nav-link about' } >About</a>
        <a href="#skills" onClick={()=>setActive("#skills")} className={active==='#skills' ? 'active nav-link skills' : 'nav-link skills' } >Skills</a>
        <a href="#projects" onClick={()=>setActive("#projects")} className={active==='#projects' ? 'active nav-link projects' : 'nav-link projects' } >Projects</a>
        <a href="#contact" onClick={()=>setActive("#contact")} className={active==='#contact' ? 'active nav-link contact' : 'nav-link contact' } >Contact</a>
        <a href="https://drive.google.com/file/d/1H40JiXHFK_tp2ycoWNkQlgN-JAXYQsjQ/view?usp=sharing" target="_blank" rel="noreferrer">
          {/* <a href={cv} download >
            <button style={{
                  background:'none',
                  color:'#5B8FB9',
                  height:'100%',
                  cursor:'pointer',
                  textAlign:"center",
                  borderRadius:'10px'
                  }}
                >
                  Resume
              </button>
          </a> */}
          Resume
        </a>
      </div>
      <button className='button_float' onClick={()=>setTop(top===`-2000` ? `0` : `-2000` )}>Menu</button>

      {/* responsive tabs */}
      <div className='NavbarHolder_display' 
         style={{
          top:`${top}%`,
         }}
        >
          <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',width:'100%'}}>
            <button className='btn' onClick={()=>setTop(`-2000`)} style={{borderRadius:'10px'}} ><RxCross1/></button>
          </div>
          <a href="#home" 
              onClick={()=>{
                setTop(`-2000`) 
                setActive("#home")
              }
            }
            className={active==='#home' ? 'active nav-link home' : 'nav-link home' }
          >
            Home
          </a>
          <a href="#about" 
              onClick={()=>{
                setTop(`-2000`) 
                setActive("#about")
              }
            }
            className={active==='#about' ? 'active nav-link about' : 'nav-link about' }
          >
            About
          </a>
          <a href="#skills" 
              onClick={()=>{
                setTop(`-2000`) 
                setActive("#skills")
              }
            }
            className={active==='#skills' ? 'active nav-link skills' : 'nav-link skills' }
          >
            Skills
          </a>
          <a href="#projects" 
              onClick={()=>{
                setTop(`-2000`) 
                setActive("#projects")
              }
            }
            className={active==='#projects' ? 'active nav-link projects' : 'nav-link projects' }
          >
            Projects
          </a>
          <a href="#contact" 
              onClick={()=>{
                setTop(`-2000`) 
                setActive("#contact")
              }
            }
            className={active==='#contact' ? 'active nav-link contact' : 'nav-link contact' }
          >
            Contact
          </a>
          {/* <a href="#about" onClick={()=>setTop(`-2000`)}>About</a> */}
          {/* <a href="#skills" onClick={()=>setTop(`-2000`)}>Skills</a> */}
          {/* <a href="#projects" onClick={()=>setTop(`-2000`)}>Projects</a> */}
          {/* <a href="#contact" onClick={()=>setTop(`-2000`)}>Contact</a> */}
          <a href={cv} download onClick={()=>setTop(`-2000`)}>Resume</a>

      </div>
    </div>
  )
}

export default Navbar

