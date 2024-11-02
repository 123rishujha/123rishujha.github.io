import React from "react";
import "./Projects.css";
import electronic from "../../assets/electronic.png";
import stylish from "../../assets/stylish.png";
import bloggy from "../../assets/bloggy.png";
import youtube from "../../assets/youtube.png";

const Projects = () => {
  let data = [
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
      title: "youtube-clone",
      img: youtube,
      description:
        "This is the clone of Youtube, users can search for videos and play the video and can filter the video based on the category",
      techstack: ["HTML,CSS,JAVASCRIPT,React Js"],
      github: "https://github.com/123rishujha/youtube-clone",
      live: "https://youtube-chi-dusky.vercel.app/",
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

    // {
    //   title: "Resell",
    //   img: resell,
    //   description:
    //     "Ecommerce website where users can do online shopping and search for their choice",
    //   techstack: ["HTML,CSS,JAVASCRIPT", "REACT", "REDUX"],
    //   github: "https://github.com/PriyanshuPatil/quikr-bazaar",
    //   live: "https://resellvalue.netlify.app/",
    // },
  ];

  return (
    <div id="projects" className="projects_section section">
      <div className="projects_container">
        <h1>Projects</h1>

        {/* projects */}

        <div style={{ marginTop: "20px" }}>
          {data.map((elem) => {
            return (
              <div className="singleProject" key={elem.title}>
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
