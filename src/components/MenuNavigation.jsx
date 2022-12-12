import React from "react";
import "../styles/MenuNavigation.css";
const MenuNavigation = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "100%",
      }}
      className="menuNav"
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",

          gridColumn: "2 / 3",
          justifyContent: "space-around",
        }}
        className="menuNav-list"
      >
        <li>
          <a style={{ color: "white" }} href="#home">
            Home
          </a>
        </li>
        <li>
          <a style={{ color: "white" }} href="#about">
            About
          </a>
        </li>
        <li>
          <a style={{ color: "white" }} href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a style={{ color: "white" }} href="#contacts">
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuNavigation;
