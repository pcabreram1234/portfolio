import React from "react";
import initialConfig from "../util/config.json";
import rocketBackground from "../assets/static/Rocket Backgound.png";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
const Projects = () => {
  const style = {
    backgroundImage: "url(" + rocketBackground + ")",
    backgroundSize: "cover",
    height: "100%",
    backgroundColor: "#2A272A",
    backgroundPosition: "center",
  };

  const projects = Object.values(initialConfig[0].pages.projects).map((el) => {
    return (
      <ProjectItem
        image={el.image}
        link={el.link}
        text={el.text}
        key={Math.random() / el.id}
        title={el.details.title}
        pageDetails={el.details["text-info"]}
        techUsed={el.details["tech-used"]}
        hasRepo={el.details.hasRepo}
        gitRepoLink={el.details.gitRepo}
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
