import React from "react";
import AboutIcon from "../assets/static/Info.png";
import ProjectstIcon from "../assets/static/Rocket.png";
import SkillsIcon from "../assets/static/Skills.png";
import DesignIcon from "../assets/static/Paint bucket.png";
import HomeIcon from "../assets/static/Home.png";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="navbar">
      <ul className="list-items">
        <li className="navbar-item">
          <a href="#home">
            <img src={HomeIcon} alt="" />
            <span>Home</span>
          </a>
        </li>
        <li className="navbar-item">
          <a href="#aboutMe">
            <img src={AboutIcon} alt="" />
            <span>About Me!</span>
          </a>
        </li>

        <li className="navbar-item">
          <a href="#projects">
            <img src={ProjectstIcon} alt="" />
            <span>Projects</span>
          </a>
        </li>
        <li className="navbar-item">
          <a href="#skills">
            <img src={SkillsIcon} alt="" />
            <span>Skills!</span>
          </a>
        </li>
        <li className="navbar-item">
          <a href="#design">
            <img src={DesignIcon} alt="" />
            <span>Design</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
