import React from "react";
import "./Skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb, SiExpress, SiCypress } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="skills_section section">
      <div className="skills_container">
        <h1>Technical Skills</h1>
        <div className="skill_grid">
          <div className='skills-card'>
            <AiFillHtml5 className="skill_icons skills-card-img" />
            <h3 class="skills-card-name">HTML</h3>
          </div>
          <div className='skills-card'>
            <DiCss3 className="skill_icons skills-card-img" />
            <h3 class="skills-card-name">CSS</h3>
          </div>
          <div className='skills-card'>
            <TbBrandJavascript className="skill_icons skills-card-img" />
            <h3 class="skills-card-name">JAVASCRIPT</h3>
          </div>
          <div className='skills-card'>
            <FaReact className="skill_icons skills-card-img" />
            <h3 class="skills-card-name">REACT</h3>
          </div>
          <div className='skills-card'>
            <SiRedux className="skill_icons skills-card-img" />
            <h3 class="skills-card-name">REDUX</h3>
          </div>
          <div className='skills-card'>
            <SiChakraui className="skill_icons skills-card-img" />
            <h3 class="skills-card-name">CHAKRA UI</h3>
          </div>
          <div className='skills-card'>
            <TbBrandNextjs className="skill_icons skills-card-img" />
            <h3 class="skills-card-name">Next js</h3>
          </div>
          <div className='skills-card'>
            <SiTypescript className="skill_icons skills-card-img" />
            <h3 class="skills-card-name">Typescript</h3>
          </div>
          <div className='skills-card'>
            <IoLogoNodejs className="skill_icons skills-card-img" />
            <h3 class="skills-card-name">Node js</h3>
          </div>
          <div className='skills-card'>
            <SiMongodb className="skill_icons skills-card-img" />
            <h3 class="skills-card-name">MongoDB</h3>
          </div>
          <div className='skills-card'>
            <SiExpress className="skill_icons skills-card-img" />
            <h3 class="skills-card-name">Express js</h3>
          </div>
          <div className='skills-card'>
            <SiCypress className="skill_icons skills-card-img" />
            <h3 class="skills-card-name">Cypress</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
