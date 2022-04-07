import React from "react";
import GitHubIcon from "../assets/static/GitHub.png";
const ProjectItem = (props) => {
  function hasGitRepo() {
    if (props.hasRepo) {
      return (
        <button
          className="Img--repo"
          onClick={() => {
            goToPage(props.gitRepoLink);
          }}
        >
          <img src={GitHubIcon} alt="" className="Img--repo" />
        </button>
      );
    }
  }

  function goToPage(page) {
    window.open(page, "_blank");
  }

  return (
    <div className="ProjectItem__container">
      <a href={props.link} target={"_blank"} className="repo-link" rel="noreferrer">
        <div className="projectItemInfo">
          <h1>{props.title}</h1>
          <p>{props.pageDetails}</p>
          <h2>Used technology</h2>
          <p>{props.techUsed}</p>
          {hasGitRepo()}
        </div>
        <div className="ProjectItem--image">
          <img src={props.image} alt="" />
        </div>
      </a>
    </div>
  );
};

export default ProjectItem;
