import React from "react";
import mainPicture from "../assets/static/Picture.png";
import initialConfig from "../util/config.json";

import "../styles/Home.css";

import { Typography, Image, Row, Col } from "antd";

const MainPicture = () => {
  const { Title } = Typography;

  return (
    <Row align="middle" id="home" justify="space-between">
      <Col span={"auto"}>
        <Image
          src={mainPicture}
          preview={false}
          style={{ opacity: "0.3" }}
          width={"50vw"}
        />
      </Col>

      <Col span={10} pull={1}>
        <Title
          style={{
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          {initialConfig[0].pages.Index.title}
        </Title>
      </Col>
    </Row>
  );
};

export default MainPicture;
