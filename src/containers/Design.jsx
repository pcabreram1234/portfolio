import React from "react";
import ColorPalette from "../components/ColorPalette";

import "../styles/Design.css";

const Design = () => {
  return (
    <div className="Design__container" id="design">
      <div className="title__container">
        <h1>Fonts and pallete colors used</h1>
      </div>
      <div className="Design-font_container">
        <span>Rubik One</span>
        <span>Roboto</span>
      </div>
      <ColorPalette />
    </div>
  );
};

export default Design;
