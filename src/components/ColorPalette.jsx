import React from "react";
import { Popover } from "antd";
import useMatchMedia from "../hooks/useMatchMedia";
import InitialConfig from "../util/config.json";
import "../styles/PopOver.css";

const ColorPalette = () => {
  const isMediaMatched = useMatchMedia("(max-width: 850px)");
  let palette;
  let colorItem;

  if (InitialConfig.length > 0) {
    palette = InitialConfig[0].pages.design.palette;
    colorItem = palette.map((el) => {
      // con esta linea eliminamos el # delante de cada codigo
      let colorWithOutSymb = el.code.slice(1);

      const currentItemStyle = {
        background: el.code,
        width: "150px",
        height: "150px",
        borderRadius: "20px",
      };

      const styleMatchMedia = {
        background: el.code,
        width: "60px",
        height: "60px",
        borderRadius: "5px",
        transition: "none",
        transform: "none",
      };

      const handleMatchMedia = () => {
        if (isMediaMatched) {
          return styleMatchMedia;
        } else {
          return currentItemStyle;
        }
      };

      const goTopage = () => {
        window.open(
          `https://mycolor.space/?hex=%23${colorWithOutSymb}&sub=1`,
          "_blank"
        );
      };

      let popOverContent = (
        <div className="PopOver__container" key={el.code}>
          <h2 className="PopOver--title">{el.color}</h2>
          <span className="PopOver--subtitle">{el.code}</span>
          <p className="PopOver--text">
            Para ver los diferentes tipos de paletas para tus proyectos te
            recomiendo la pagina My Color Space
          </p>
        </div>
      );

      return styleMatchMedia ? (
        <div
          className="ColorItem"
          style={handleMatchMedia()}
          onClick={goTopage}
          key={Math.random()}
        ></div>
      ) : (
        <Popover content={popOverContent} key={Math.random()}>
          <div
            className="ColorItem"
            style={handleMatchMedia()}
            onClick={goTopage}
          ></div>
        </Popover>
      );
    });
  }

  return (
    <div className="Design-colors_container">
      <span>Paleta de Colores</span>
      <div className="colorItems">{colorItem}</div>
    </div>
  );
};

export default ColorPalette;
