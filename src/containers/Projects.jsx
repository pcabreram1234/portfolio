import React, { useState } from "react";
import GitHubIcon from "../assets/icons/GitHub.png";
import ProjectsGrid from "../components/ProjectsGrid";
import ProjectItem from "../components/ProjectItem";
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
    <div id="Projects__container">
      {/* <Title style={{ color: "white", fontFamily: "Rubik", fontSize: "50px" }}>
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
            </a>
          )}
        </Col>
      </Row> */}
      <Title>Works</Title>
      <ProjectsGrid />
    </div>
  );
};

export default Projects;
