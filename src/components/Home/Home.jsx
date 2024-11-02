import React from "react";
import "./Home.css";
import profile from "../../assets/profile.png";
// import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div id="home">
      <div>
        <div className="intro">
          <h1 style={{ color: "var(--text-main)" }}>RISHU JHA</h1>
          <h2>Solving Problems, Byte by Byte.</h2>
          <p>
            An enthusiastic Full-stack web developer with hands-on experience in
            developing, collaborating & managing projects. Highly skilled
            decision-maker and problem solver.
          </p>
        </div>
        <div className="image-holder">
          <img className="profile-image" src={profile} alt="" />
        </div>
        <p style={{ color: "var(--primary-light)" }}>
          Full Stack Mern Developer
        </p>
      </div>
    </div>
  );
};

export default Home;
