import React from "react";
import "./About.css";
import { BsDownload } from "react-icons/bs";
import animeCoder from "../../assets/anime-coder.jpg";
import cv from "../../assets/Rishu_Jha_Resume.pdf";

const About = () => {
  const handleResume = () => {
    window.open(cv, "_blank");
  };

  return (
    <section id="about">
      <div className="about_container">
        <h1>About Me</h1>
        <div>
          <div className="about-image-container">
            <img
              className="animeCoder-image"
              src={animeCoder}
              alt="Profile"
              loading="lazy"
            />
          </div>
          <div className="about-content">
            <p className="aboutPara" id="user-detail-intro">
              A dedicated and driven Full Stack MERN Developer with over a year
              of professional experience in software development. Skilled in
              HTML, CSS, JavaScript, React, Redux, Node.js, Express, and
              TypeScript, with a strong problem-solving mindset and a passion
              for building dynamic, user-friendly applications. Continuously
              learning and eager to contribute to an innovative,
              forward-thinking tech company as a proficient developer.
            </p>
            <button id="resume-button-2">
              <a
                href={cv}
                download="Rishu_Jha_Resume"
                onClick={handleResume}
                id="resume-link-2"
              >
                Download Resume
                <BsDownload />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
