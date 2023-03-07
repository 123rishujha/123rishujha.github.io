import React from "react";
import "./Home.css";
import profile from "../../assets/profile.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div id="home" className="home_section section">
      <div className="home_container" style={{ background: "black" }}>
        <div className="Home_text">
          <h1>Hii</h1>
          <h1>
            I am <span id="user-detail-name">Rishu Jha</span>
          </h1>
          <h1>
            I'm{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "Full Stack Web Developer",
                  "React Developer",
                  "Problem Solver",
                  "Javascript Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={100}
                delaySpeed={2000}
              />
            </span>
          </h1>
        </div>

        <div className="home_coding_gif">
          <img class="home-img" src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
