import React from "react";
import GitHubIcon from "../assets/icons/GitHubBlack.png";
import GmailIcon from "../assets/icons/Gmail.png";
import LinkedInIcon from "../assets/icons/LinkedIn.png";
import TwitterIcon from "../assets/icons/Twitter.png";
import PersonalInfo from "../util/config.json";
import "../styles/SocialBarner.css";

const SocialBarner = () => {
  return (
    <div className="SocialBarner__container" id="contact">
      <ul>
        <li>
          <a
            href={PersonalInfo[0].personalInfo.gitHub}
            className="icon-Github"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={GitHubIcon} alt="" />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${PersonalInfo[0].personalInfo.mail}`}
            className="icon-Gmail"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={GmailIcon} alt="" />
          </a>
        </li>
        <li>
          <a
            href={PersonalInfo[0].personalInfo.linkedIn}
            className="icon-LinkedIn"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={LinkedInIcon} alt="" />
          </a>
        </li>
        <li>
          <a
            href={PersonalInfo[0].personalInfo.twitter}
            className="icon-Twitter"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={TwitterIcon} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialBarner;
