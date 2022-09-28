import React, { useState } from "react";
import Carousel from "../components/Carousel";
import InitialConfig from "../util/config.json";
import { Typography, Row, Col, Image } from "antd";

const { Title, Text } = Typography;
const Projects = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        textAlign: "center",
        padding: "10px 0",
      }}
    >
      <Title style={{ color: "white", fontFamily: "Rubik" }}>Projects</Title>
      <div id="Selected_item">
        <Row>
          <Col>
            <Text>{props.title}</Text>
            <Image src={props.image} width="auto" />
          </Col>
          <Col>
            <Text>
              {props.textInfo} - {props.techUsed}{" "}
            </Text>

            {props.hasRepo && (
              <a target={"_blank"} href={props.gitRepo}>
                Repository
              </a>
            )}
          </Col>
        </Row>
      </div>
      <Carousel items={InitialConfig[0].pages.projects} />
    </div>
  );
};

export default Projects;
