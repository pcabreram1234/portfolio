import React from "react";
import SkillsBackground from "../assets/static/rocket-minimalism-4k-ou.jpeg";
import html5Icon from "../assets/static/html5.png";
import javaScriptIcon from "../assets/static/javascript.png";
import css3Icon from "../assets/static/css3.png";
import reactIcon from "../assets/static/react-icon.png";
import mySqlIcon from "../assets/static/mysql.png";
import phpIcon from "../assets/static/php-icon.png";
import gitIcon from "../assets/static/git-icon.png";
import BootstrapIcon from "../assets/static/bootstrap.png";
import initialConfig from "../util/config.json";
import "../styles/Skills.css";

const Skills = () => {
  const style = {
    backgroundImage: "url(" + SkillsBackground + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  const { skillsLinks } = initialConfig[0].pages.skills;

  return (
    <div className="Skills__container" /* style={style}  */id="skills">
      <div className="Skills__list_container">
        <div className="Skills--items">
          <div className="Skills-items__container">
            <a href={skillsLinks.HTML} target={"_blank"} rel="noreferrer">
              <img src={html5Icon} alt="" />
            </a>
            <a href={skillsLinks.javaScript} target={"_blank"} rel="noreferrer">
              <img src={javaScriptIcon} alt="" />
            </a>

            <a href={skillsLinks.CSS} target={"_blank"} rel="noreferrer">
              <img src={css3Icon} alt="" />
            </a>

            <a href={skillsLinks.Bootstrap} target={"_blank"} rel="noreferrer">
              <img src={BootstrapIcon} alt="" />
            </a>

            <a href={skillsLinks.ReactJS} target={"_blank"} rel="noreferrer">
              <img src={reactIcon} alt="" />
            </a>

            <a href={skillsLinks.mySql} target={"_blank"} rel="noreferrer">
              <img src={mySqlIcon} alt="" />
            </a>

            <a href={skillsLinks.PHP} target={"_blank"} rel="noreferrer">
              <img src={phpIcon} alt="" />
            </a>

            <a href={skillsLinks.GIT} target={"_blank"} rel="noreferrer">
              <img src={gitIcon} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="Skills--title">
        <h1>Skills</h1>
      </div>
    </div>
  );
};

export default Skills;
