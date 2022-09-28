import React from "react";
import useMatchMedia from "../hooks/useMatchMedia";
import initialConfig from "../util/config.json";
import { Row, Typography, Col, Layout } from "antd";
import "../styles/AboutMe.css";

const { Text, Title } = Typography;

const AboutMe = () => {
  // let backGroundImage;
  const isMediaMatched = useMatchMedia("(max-width: 850px)");
  // const isMediaLandscapeMatched = useMatchMedia(
  //   "(max-width: 850px) and (orientation: landscape)"
  // );

  // const style = {
  //   background: "url(" + backGroundImage + ")",
  //   backgroundSize: "calc(50%)",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPositionX: "120%",
  //   backgroundPositionY: "-30%",
  // };

  // const styleMediaMatched = {
  //   background: "url(" + backGroundImage + ")",
  //   backgroundSize: "100vw",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPositionX: "117px",
  //   backgroundPositionY: "-101px",
  // };

  // const styleLandscape = {
  //   background: "url(" + backGroundImage + ")",
  //   backgroundSize: "311px",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPositionX: "490px",
  //   backgroundPositionY: "-101px",
  // };

  // const handleMatcMedia = () => {
  //   if (isMediaLandscapeMatched) {
  //     return styleLandscape;
  //   }
  //   if (isMediaMatched) {
  //     return styleMediaMatched;
  //   } else {
  //     return style;
  //   }
  // };

  // if (initialConfig.length > 0) {
  //   backGroundImage = initialConfig[0].pages.AboutMe.image;
  // }

  return (
    // <div
    //   style={{
    //     height: "100vh",
    //     display: "flex",
    //     alignItems: "center",
    //     padding: "10px 0",
    //   }}
    // >

    <Row
      justify="space-between"
      align="middle"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{ padding: "0 30px", height: "100vh" }}
    >
      <Col span={!isMediaMatched ? 10 : "auto"}>
        <Title style={{ color: "white", textAlign: "center" }}>
          {initialConfig[0].pages.AboutMe.title}
        </Title>
      </Col>

      <Col
        span={!isMediaMatched ? 14 : "auto"}
        style={{ textAlign: "justify" }}
      >
        <Text
          style={{
            color: "white",
            padding: "0 10px",
            fontSize: "30px",
            wordSpacing: "4px",
          }}
        >
          {initialConfig[0].pages.AboutMe.text}
        </Text>
      </Col>
    </Row>

    // </div>
  );
};

export default AboutMe;
