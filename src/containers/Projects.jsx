import React from "react";
import initialConfig from "../util/config.json";
import rocketBackground from "../assets/static/Rocket Backgound.png";
import ProjectItem from "../components/ProjectItem";
import AutosBelloPic from "../assets/static/projects/AutosBello.png";
import CharosGardepic from "../assets/static/projects/CharosGarden.png";
import RegisterPic from "../assets/static/projects/Register.png";
import EkofarmingPic from "../assets/static/projects/Ekofarming.png";
import eCommerceTemplatePic from "../assets/static/projects/eCommerceTemplate.png";

import "../styles/Projects.css";
const Projects = () => {
  const style = {
    backgroundImage: "url(" + rocketBackground + ")",
    backgroundSize: "cover",
    height: "100%",
    backgroundColor: "#2A272A",
    backgroundPosition: "center",
  };

  const imageRepoArray = [
    AutosBelloPic,
    CharosGardepic,
    RegisterPic,
    EkofarmingPic,
    eCommerceTemplatePic,
  ];

  const projects = Object.values(initialConfig[0].pages.projects).map((el) => {
    return (
      <ProjectItem
        image={imageRepoArray[el.id]}
        link={el.link}
        text={el.text}
        key={Math.random() / el.id}
        title={el.details.title}
        pageDetails={el.details["text-info"]}
        techUsed={el.details["tech-used"]}
        hasRepo={el.details.hasRepo}
        gitRepoLink={el.details.gitRepoLink}
      />
    );
  });

  return (
    <div className="Projects__container" style={style} id="projects">
      <div className="Projects-tittle">
        <h1>Projects</h1>
      </div>
      <div className="mainProjects_container">{projects}</div>
    </div>
  );
};

export default Projects;
