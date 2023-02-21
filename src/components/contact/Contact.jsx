import React from 'react'
import './Contact.css';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';


const Contact = () => {
  return (
    <div id='contact' className="contact_section section">
        <div className='contact_container'>
            {/* <h1>Contact</h1> */}
            

            <div style={{textAlign:'center',height:'50%',justifyContent:'center',alignItems:'center'}}>
              <h1>Contact - +919310146764</h1>
                <h1>Email - 
                  <a href="mailto:jharishu796@gmail.com" style={{color:'#b0eb0e', texDecoration:'none'}} >
                    jharishu796@gmail.com
                  </a>
                </h1>
              <h1>Address - New Delhi</h1>
            </div>

            <div>
              <a href="https://www.linkedin.com/in/rishu-jha/" style={{backgroundColor:'#f0b512',height:'100px',width:'100px',padding:'20px',fontSize:'55px',borderRadius:'5px'}}>
                <AiFillLinkedin className='contact-icons' />
              </a>
              <a href="https://github.com/123rishujha" style={{backgroundColor:'#f0b512',height:'100px',width:'100px',padding:'20px',fontSize:'55px',marginLeft:'5px',borderRadius:'5px'}} >
                <BsGithub className='contact-icons'  />
              </a>
            </div>

        </div>
    </div>
  )
}


export default Contact

