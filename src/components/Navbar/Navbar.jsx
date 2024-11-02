import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsDownload } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import cv from "../../assets/Rishu_Jha_Resume.pdf";
import "./Navbar.css";

const Navbar = () => {
  const [top, setTop] = useState(`-2000`);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResume = () => {
    window.open(cv, "_blank");
  };

  return (
    <div id="nav-menu" className={`MainNavbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="brand">
        Portfolio
      </a>

      <div className="NavbarHolder">
        <a
          href="#home"
          className={
            active === "#home" ? "active nav-link home" : "nav-link home"
          }
          onClick={() => setActive("#home")}
        >
          Home
        </a>
        <a
          href="#about"
          className={
            active === "#about" ? "active nav-link about" : "nav-link about"
          }
          onClick={() => setActive("#about")}
        >
          About
        </a>
        <a
          href="#skills"
          className={
            active === "#skills" ? "active nav-link skills" : "nav-link skills"
          }
          onClick={() => setActive("#skills")}
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
          onClick={() => setActive("#projects")}
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
          onClick={() => setActive("#contact")}
        >
          Contact
        </a>
        <button id="resume-button-1">
          <a
            href={cv}
            download="Rishu_Jha_Resume"
            onClick={handleResume}
            id="resume-link-1"
            className="nav-link resume"
          >
            Resume <BsDownload />
          </a>
        </button>
      </div>

      <button
        className="button_float"
        onClick={() => setTop(top === `-2000` ? `0` : `-2000`)}
      >
        <BiMenuAltRight className="hamburger" />
      </button>

      <div
        className="NavbarHolder_display"
        style={{
          top: `${top}px`,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button className="btn" onClick={() => setTop(`-2000`)}>
            <RxCross1 />
          </button>
        </div>
        <a
          href="#home"
          onClick={() => {
            setTop(`-2000`);
            setActive("#home");
          }}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => {
            setTop(`-2000`);
            setActive("#about");
          }}
        >
          About
        </a>
        <a
          href="#skills"
          onClick={() => {
            setTop(`-2000`);
            setActive("#skills");
          }}
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={() => {
            setTop(`-2000`);
            setActive("#projects");
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => {
            setTop(`-2000`);
            setActive("#contact");
          }}
        >
          Contact
        </a>
        <a
          href={cv}
          download="Rishu_Jha_Resume"
          onClick={() => {
            setTop(`-2000`);
            handleResume();
          }}
          className="nav-link resume"
        >
          Resume <BsDownload />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
