import React from "react";
import useMatchMedia from "../hooks/useMatchMedia";
import initialConfig from "../util/config.json";
import "../styles/AboutMe.css";

const AboutMe = () => {
  let backGroundImage;
  const isMediaMatched = useMatchMedia("(max-width: 850px)");
  const isMediaLandscapeMatched = useMatchMedia(
    "(max-width: 850px) and (orientation: landscape)"
  );

  const style = {
    background: "url(" + backGroundImage + ")",
    backgroundSize: "calc(50%)",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "120%",
    backgroundPositionY: "-30%",
  };

  const styleMediaMatched = {
    background: "url(" + backGroundImage + ")",
    backgroundSize: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "117px",
    backgroundPositionY: "-101px",
  };

  const styleLandscape = {
    background: "url(" + backGroundImage + ")",
    backgroundSize: "311px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "490px",
    backgroundPositionY: "-101px",
  };

  const handleMatcMedia = () => {
    if (isMediaLandscapeMatched) {
      return styleLandscape;
    }
    if (isMediaMatched) {
      return styleMediaMatched;
    } else {
      return style;
    }
  };

  if (initialConfig.length > 0) {
    backGroundImage = initialConfig[0].pages.AboutMe.image;
  }

  return (
    <div className="AboutMe__Container" style={handleMatcMedia()} id="aboutMe">
      {initialConfig.length > 0 && (
        <div className="AboutMe__info">
          <div className="AboutMe__Title">
            <h1>{initialConfig[0].pages.AboutMe.title}</h1>
          </div>

          <div className="AboutMe__Text">
            <h2>{initialConfig[0].pages.AboutMe.text}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
