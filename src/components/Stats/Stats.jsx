import React from "react";
import "./Stats.css";

import GitHubCalendar from "react-github-calendar";

// npm i react-github-calendar

const Stats = () => {
  return (
    <div className="stats_section">
      <div className="stats_container">
        <h1 style={{ textDecoration: "underline", textAlign: "left" }}>
          GitHub Calendar
        </h1>
        <GitHubCalendar
          username="123rishujha"
          blockMargin={7}
          blockSize={15}
          color={"#5B8FB9"}
          hideColorLegend={true}
          font-fontSize={10}
          style={{ display: "flex", flexDirection: "column", margin: "auto" }}
        />
        <div className="statesImages">
          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=123rishujha&theme=highcontrast"
            alt="github-streak-stats"
            // style={{ width: "100%",margin:"auto" }}
          />
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=123rishujha&show_icons=true&theme=highcontrast"
            alt="github-stats-card"
            // style={{ width: "100%",margin:"auto" }}
          />
          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=123rishujha&layout=compact&title_color=b0eb13&bg_color=000000&text_color=62ca0e&border_color=#4f4f4f"
            alt="github-top-langs"
            // style={{ width: "100%",margin:"0px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
