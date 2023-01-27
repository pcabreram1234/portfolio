import React from "react";
import initialConfig from "../util/config.json";
import { Row, Typography } from "antd";
import "../styles/AboutMe.css";

const { Text } = Typography;

const AboutMe = () => {
  return (
    <Row
      justify="center"
      align="middle"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{ padding: "0 30px", height: "100vh" }}
      className="AboutMe__Container"
      id="about"
    >
      <Text
        style={{
          color: "white",
          padding: "0 5%",
          fontSize: "50px",
          wordSpacing: "4px",
          textAlign: "center",
        }}
        className="AboutMe__Text"
      >
        {initialConfig[0].pages.AboutMe.text}
      </Text>
    </Row>
  );
};

export default AboutMe;
