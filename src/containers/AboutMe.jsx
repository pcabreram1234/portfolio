import React from "react";
import useMatchMedia from "../hooks/useMatchMedia";
import initialConfig from "../util/config.json";
import { Row, Typography, Col, Layout } from "antd";
import "../styles/AboutMe.css";

const { Text, Title } = Typography;

const AboutMe = () => {
  const isMediaMatched = useMatchMedia("(max-width: 850px)");

  return (
    <Row
      justify="center"
      align="middle"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{ padding: "0 30px", height: "100vh" }}
    >
      {/* <Col span={!isMediaMatched ? 10 : "auto"}>
        <Title style={{ color: "white", textAlign: "center" }}>
          {initialConfig[0].pages.AboutMe.title}
        </Title>
      </Col> */}

      {/* <Col
        span={!isMediaMatched ? 14 : "auto"}
        style={{ textAlign: "justify" }}
      > */}
        <Text
          style={{
            color: "white",
            padding: "0 5%",
            fontSize: "50px",
            wordSpacing: "4px",
            textAlign: "center",
            
          }}
        >
          {initialConfig[0].pages.AboutMe.text}
        </Text>
      {/* </Col> */}
    </Row>

    // </div>
  );
};

export default AboutMe;
