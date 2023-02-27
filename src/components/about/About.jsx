import React from "react";
import "./About.css";
import Stats from "../Stats/Stats";

const About = () => {
  return (
    <div id="about" className="about_section section">
      <div className="about_container">
        <h1 style={{ textDecoration: "underline" }}>About</h1>
        <div>
          <p className="aboutPara">
            A self-motivated, hard-working, and ambitious Full Stack Web
            Developer and a good learner with proficiency in JavaScript. Having
            a Problem-solving mindset, and 1200+ hrs of hands-on experience in
            developing fully functional applications. Looking forward to working
            as a developer and competent employee in an exciting tech company.
          </p>
          <Stats />

          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=123rishujha&theme=highcontrast"
            alt="github-streak-stats"
          />
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=123rishujha&show_icons=true&theme=highcontrast"
            alt="github-stats-card"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
