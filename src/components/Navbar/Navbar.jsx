import React from "react";
import "./Navbar.css";
import cv from "../../assets/Rishu_Jha_Resume.pdf";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [top, setTop] = useState(`-2000`);
  // const [active, setActive] = useState("#home");
  const [active, setActive] = useState("");

  const handleResume = () => {
    window.open(
      `https://drive.google.com/file/d/1a5DTB0q4dsLUaWrY86tez4KsmygPIvCt/view?usp=sharing`,
      "_blank"
    );
  };

  return (
    <div id="nav-menu" className="MainNavbar">
      <div className="NavbarHolder">
        <a
          href="#home"
          className={
            active === "#home" ? "active nav-link home" : "nav-link home"
          }
        >
          Home
        </a>
        <a
          href="#about"
          className="nav-link about"
          // className={
          //   active === "#about" ? "active nav-link about" : "nav-link about"
          // }
        >
          About
        </a>
        <a
          href="#skills"
          className={
            active === "#skills" ? "active nav-link skills" : "nav-link skills"
          }
        >
          Skills
        </a>
        <a
          href="#projects"
          className={
            active === "#projects"
              ? "active nav-link projects"
              : "nav-link projects"
          }
        >
          Projects
        </a>
        <a
          href="#contact"
          className={
            active === "#contact"
              ? "active nav-link contact"
              : "nav-link contact"
          }
        >
          Contact
        </a>
        <a
          href={cv}
          onClick={handleResume}
          download={"Rishu_Jha_Resume"}
          id="resume-button-1"
        >
          Resume
        </a>
      </div>
      <button
        className="button_float"
        onClick={() => setTop(top === `-2000` ? `0` : `-2000`)}
      >
        Menu
      </button>

      {/* responsive tabs */}
      <div
        className="NavbarHolder_display"
        style={{
          top: `${top}%`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
          <button
            className="btn"
            onClick={() => setTop(`-2000`)}
            style={{ borderRadius: "10px" }}
          >
            <RxCross1 />
          </button>
        </div>
        <a
          href="#home"
          // onClick={() => {
          //   setTop(`-2000`);
          //   setActive("#home");
          // }}
          className={
            active === "#home" ? "active nav-link home" : "nav-link home"
          }
        >
          Home
        </a>
        <a
          href="#about"
          className="nav-link about"
          // onClick={() => {
          //   setTop(`-2000`);
          //   setActive("#about");
          // }}
          // className={
          //   active === "#about" ? "active nav-link about" : "nav-link about"
          // }
        >
          About
        </a>
        <a
          href="#skills"
          // onClick={() => {
          //   setTop(`-2000`);
          //   setActive("#skills");
          // }}
          className={
            active === "#skills" ? "active nav-link skills" : "nav-link skills"
          }
        >
          Skills
        </a>
        <a
          href="#projects"
          // onClick={() => {
          //   setTop(`-2000`);
          //   setActive("#projects");
          // }}
          className={
            active === "#projects"
              ? "active nav-link projects"
              : "nav-link projects"
          }
        >
          Projects
        </a>
        <a
          href="#contact"
          // onClick={() => {
          //   setTop(`-2000`);
          //   setActive("#contact");
          // }}
          className={
            active === "#contact"
              ? "active nav-link contact"
              : "nav-link contact"
          }
        >
          Contact
        </a>

        <a
          id="resume-button-1"
          href={cv}
          // onClick={() => {
          //   setTop(`-2000`);
          //   handleResume();
          // }}
          download
          className="nav-link resume"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
