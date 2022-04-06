import React from "react";
import initialConfig from "../util/config.json";
import skillsContaineBackground from "../assets/static/skillsContaineBackground.png";
const MainPicture = () => {
  return (
    <div className="Home__Container">
      <div className="MainPicture" id="home">
        <div className="backGround">
          <img src={skillsContaineBackground} alt="" />
          <img src={initialConfig[0].pages.Index.image} alt="" />
        </div>
        <div className="indexInfo">
          <span>{initialConfig[0].pages.Index.title}</span>
        </div>
      </div>
    </div>
  );
};

export default MainPicture;
