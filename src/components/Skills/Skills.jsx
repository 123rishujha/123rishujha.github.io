import React from 'react'
import './Skills.css'
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {FaReact} from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import {SiRedux} from 'react-icons/si';
import {SiChakraui} from 'react-icons/si';


const Skills = () => {
  return (
    <div id='skills' className="skills_section section">
        <div className='skills_container'>
          <h1>Technical Skills</h1>
          <div className='skill_grid'>
            <div>
                <AiFillHtml5 className='skill_icons' />
                <h3>HTML</h3>
            </div>
            <div>
                <DiCss3 className='skill_icons' />
                <h3>CSS</h3>
            </div>
            <div>
                <TbBrandJavascript className='skill_icons' />
                <h3>JAVASCRIPT</h3>
            </div>
            <div>
                <FaReact className='skill_icons' />
                <h3>REACT</h3>
            </div>
            <div>
                <SiRedux className='skill_icons' />
                <h3>REDUX</h3>
            </div>
            <div>
                <SiChakraui className='skill_icons' />
                <h3>CHAKRA UI</h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills

