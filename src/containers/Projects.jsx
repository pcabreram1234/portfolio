import React, { useState } from "react";
import Carousel from "../components/Carousel";
import InitialConfig from "../util/config.json";
import GitHubIcon from "../assets/icons/GitHub.png";
import { Typography, Row, Col, Image } from "antd";

const { Title, Text } = Typography;
const Projects = () => {
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState([]);
  const [textInfo, setTextInfo] = useState([]);
  const [techUsed, setTechUsed] = useState([]);
  const [hasRepo, setHasRep] = useState([]);
  const [gitRepo, setGitRepo] = useState([]);

  const handleItem = ({
    title,
    image,
    textInfo,
    techUsed,
    hasRepo,
    gitRepo,
  }) => {
    setTitle(title);
    setImage(image);
    setTextInfo(textInfo);
    setTechUsed(techUsed);
    setHasRep(hasRepo);
    setGitRepo(gitRepo);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Title style={{ color: "white", fontFamily: "Rubik", fontSize: "50px" }}>
        Projects
      </Title>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align="middle">
        <Col span={10}>
          <Text style={{ color: "white", fontSize: "40px" }}>{title}</Text>
          <Image src={image} preview={false} style={{ width: "500px" }} />
        </Col>

        <Col span={12}>
          <Text style={{ color: "white", fontSize: "25px" }}>
            {textInfo} {techUsed}
          </Text>
          {hasRepo && (
            <a
              target={"_blank"}
              href={gitRepo}
              style={{ color: "white", fontSize: "25px" }}
            >
              <Image
                src={GitHubIcon}
                width="30"
                height="30"
                preview={false}
                style={{ filter: "inver(1)" }}
              />
              Repository
            </a>
          )}
        </Col>
      </Row>

      <Carousel
        items={InitialConfig[0].pages.projects}
        handleItem={handleItem}
      />
    </div>
  );
};

export default Projects;
