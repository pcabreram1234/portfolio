import React from "react";
import { Menu } from "antd";
import {
  HomeFilled,
  InfoCircleFilled,
  ProjectFilled,
  ContactsFilled,
} from "@ant-design/icons";
import "../styles/MenuNavigation.css";
const MenuNavigation = () => {
  const menuItems = [
    {
      label: (
        <a href="#home" style={{ color: "white" }}>
          Home
        </a>
      ),
      key: "home",
      icon: <HomeFilled style={{ color: "white" }} />,
    },
    {
      label: (
        <a href="#about" style={{ color: "white" }}>
          About
        </a>
      ),
      key: "about",
      icon: <InfoCircleFilled style={{ color: "white" }} />,
    },
    {
      label: (
        <a href="#projects" style={{ color: "white" }}>
          Projects
        </a>
      ),
      key: "projects",
      icon: <ProjectFilled style={{ color: "white" }} />,
    },
    {
      label: (
        <a href="#contacts" style={{ color: "white" }}>
          Contacts
        </a>
      ),
      key: "contacts",
      icon: <ContactsFilled style={{ color: "white" }} />,
    },
  ];
  return (
    <Menu
      items={menuItems}
      mode="horizontal"
      style={{
        justifyContent: "flex-end",
        background: "transparent",
        borderColor: "transparent",
      }}
    ></Menu>
  );
};

export default MenuNavigation;
