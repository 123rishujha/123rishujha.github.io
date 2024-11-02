import React from "react";
import "./Stats.css";

import GitHubCalendar from "react-github-calendar";

// npm i react-github-calendar

const Stats = () => {
  // Theme colors from your CSS variables
  const themeColors = {
    background: "2c3e50",
    border: "3498db",
    title: "ffffff",
    text: "7f8c8d",
  };

  return (
    <div className="stats_section">
      <div className="stats_container">
        <h1>GitHub Calendar</h1>
        <GitHubCalendar
          username="123rishujha"
          blockMargin={7}
          blockSize={15}
          fontSize={16}
          style={{
            width: "100%",
            margin: "auto",
            padding: "20px",
          }}
          theme={{
            level0: "#2c3e50", // primary-main
            level1: "#34495e", // secondary-main
            level2: "#3498db", // primary-light
            level3: "#6c8fa6", // secondary-light
            level4: "#3498db", // primary-light (brightest)
            background: "transparent",
            text: "#ffffff", // text-main
          }}
        />
        <div className="statesImages">
          <img
            id="github-streak-stats"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=123rishujha&background=${themeColors.background}&border=${themeColors.border}&ring=${themeColors.border}&fire=${themeColors.border}&currStreakNum=${themeColors.title}&sideNums=${themeColors.title}&currStreakLabel=${themeColors.text}&sideLabels=${themeColors.text}&dates=${themeColors.text}`}
            alt="github-streak-stats"
          />
          <img
            id="github-stats-card"
            src={`https://github-readme-stats.vercel.app/api?username=123rishujha&show_icons=true&bg_color=${themeColors.background}&title_color=${themeColors.title}&text_color=${themeColors.text}&icon_color=${themeColors.border}&border_color=${themeColors.border}`}
            alt="github-stats-card"
          />
          <img
            id="github-top-langs"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=123rishujha&layout=compact&bg_color=${themeColors.background}&title_color=${themeColors.title}&text_color=${themeColors.text}&border_color=${themeColors.border}`}
            alt="github-top-langs"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
