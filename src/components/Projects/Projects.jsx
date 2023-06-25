import React from "react";
import "./Projects.css";
import bebo from "../../assets/bebo.png";
import electronic from "../../assets/electronic.png";
import resell from "../../assets/resell.png";
import stylish from "../../assets/stylish.png";
import amazon from "../../assets/amazon.png";
import bloggy from "../../assets/bloggy.png";

const Projects = () => {
  let data = [
    {
      title: "Amazon clone",
      img: amazon,
      description:
        "This is an e-commerce website.where we can buy clothing,mobile,loptop and other products.we cloned most of the pages of the Amazon.com",
      techstack: ["HTML,CSS,JAVASCRIPT,React Js"],
      github: "https://github.com/123rishujha/pocketstore_amazon_clone",
      live: "https://pocketstore.vercel.app/",
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
      title: "Bloggy",
      img: bloggy,
      description:
        "Dynamic blogging platform that allows users to read, create, and edit blogs. It features real-time chat functionality for engaging with other users",
      techstack: ["HTML,CSS,JAVASCRIPT", "REACT"],
      github: "https://github.com/123rishujha/bloggy",
      live: "https://writebloggy.netlify.app/blogs",
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
        <h1 style={{ textDecoration: "underline", marginBottom: "10px" }}>
          Projects
        </h1>

        {/* projects */}

        <div>
          {data.map((elem) => {
            return (
              <div className="singleProject project-card" key={elem.title}>
                <img src={elem.img} alt={elem.title} className="projectImage" />
                <div className="projectDetails">
                  <h4 class="project-title">{elem.title}</h4>
                  <p class="project-description">{elem.description}</p>
                  <div className="projectLinks">
                    <a
                      class="project-github-link"
                      href={elem.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      class="project-deployed-link"
                      href={elem.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
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
