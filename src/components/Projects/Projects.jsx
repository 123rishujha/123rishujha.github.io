import React from "react";
import "./Projects.css";
import bebo from "../../assets/bebo.png";
import electronic from "../../assets/electronic.png";
import resell from "../../assets/resell.png";
import stylish from "../../assets/stylish.png";

const Projects = () => {
  
  let data = [
    {
      title: "Beauty Bebo",
      img: bebo,
      description: "Ecommerce website where users can buy beauty product",
      techstack: ["HTML,CSS,JAVASCRIPT"],
      github: "https://github.com/Ujjawal0203/half-top-1982",
      live: "https://sage-youtiao-e68d77.netlify.app/index.html",
    },
    {
      title: "Stylish World",
      img: stylish,
      description:
        "An e-commerce website that provides you with fashion-related products.",
      techstack: ["HTML,CSS,JAVASCRIPT", "REACT"],
      github: "https://github.com/123rishujha/intelligent-tray-2816",
      live: "https://stylishworld.netlify.app/",
    },
    {
      title: "Electronic Shop",
      img: electronic,
      description:
        "An e-commerce website that provides you with electronic-related products.",
      techstack: ["HTML,CSS,JAVASCRIPT", "REACT"],
      github: "https://github.com/123rishujha/capricious-slope-3826",
      live: "https://electronichshop.netlify.app/",
    },
    {
      title: "Resell",
      img: resell,
      description:
        "Ecommerce website where users can do online shopping and search for their choice",
      techstack: ["HTML,CSS,JAVASCRIPT", "REACT", "REDUX"],
      github: "https://github.com/PriyanshuPatil/quikr-bazaar",
      live: "https://resellvalue.netlify.app/",
    },
  ];

  return (
    <div id="projects" className="projects_section section">
      <div className="projects_container">
        <h1 style={{ textDecoration: "underline",marginBottom:'10px' }}>Projects</h1>

        <div>
          {data.map((elem) => {
            return (
              <div className="singleProject">
                <img src={elem.img} alt={elem.title} className="projectImage" />
                <div className="projectDetails">
                  <h4>{elem.title}</h4>
                  <p>{elem.description}</p>
                  <div className="projectLinks">
                    <a href={elem.github}>Github</a>
                    <a href={elem.live}>Live</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default Projects;

