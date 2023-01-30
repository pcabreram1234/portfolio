import React from "react";
import initialConfig from "../util/config.json";
import { Typography, Image } from "antd";
import "../styles/AboutMe.css";

const { Text } = Typography;

const AboutMe = () => {
  return (
    <div className="AboutMe__Container" id="about">
      <Image
        src={initialConfig[0].pages.AboutMe.image}
        width={300}
        preview={false}
      />
      <Text
        style={{
          color: "white",
          fontSize: "50px",
          wordSpacing: "4px",
          textAlign: "center",
        }}
        className="AboutMe__Text"
      >
        {initialConfig[0].pages.AboutMe.text}
      </Text>
    </div>
  );
};

export default AboutMe;
