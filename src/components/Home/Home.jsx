import React from 'react'
import './Home.css';
import bg_gif from '../../assets/dev_bg.gif';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div id='home' className="home_section section">
        <div className='home_container'>
            <div className='Home_text'>
              <h1>Hii</h1>
              <h1>I am Rishu Jha</h1>
              <h1>
                I'm {' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                  <Typewriter
                    words={['Front End Developer', 'React Developer', 'Problem Solver','Javascript Developer']}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={100}
                    delaySpeed={2000}
                  />
                </span>
              </h1>
            </div>

            <div className='home_coding_gif'>
              <img src={bg_gif} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Home

