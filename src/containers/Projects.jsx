import React, { useState } from "react";
import { Image, Typography, Carousel, Layout, Row, Col, Anchor } from "antd";
import InitialConfig from "../util/config.json";
import "../styles/Projects.css";

const { projects } = InitialConfig[0].pages;
const { Title, Text, Paragraph } = Typography;
const { Content, Footer } = Layout;
const { Link } = Anchor;
const ProjectsGrid = () => {
  const [title, setTitle] = useState([projects[0].text]);
  const [image, setImage] = useState([projects[0].image]);
  const [description, setDescription] = useState([
    projects[0].details.textInfo,
  ]);
  const [hasRepo, setHasRepo] = useState([projects[0].details.hasRepo]);
  const [gitHubRepo, setGitHubRepo] = useState([projects[0].details.gitRepo]);
  const [techUsed, setTechUsed] = useState([projects[0].details.techUsed]);
  const [link, setLink] = useState(projects[0].link);

  const handleClickProject = (
    title,
    image,
    description,
    hasRepo,
    gitHubRepo,
    techUsed,
    link
  ) => {
    setTitle(title);
    setImage(image);
    setDescription(description);
    setHasRepo(hasRepo);
    setGitHubRepo(gitHubRepo);
    setTechUsed(techUsed);
    setLink(link);
  };
  return (
    <Layout style={{ height: "100vh", background: "none" }}>
      <Title style={{ color: "white", textAlign: "center", fontSize: "50px" }}>
        Works
      </Title>
      <Content>
        <Row justify="center" align="middle">
          <Col
            span={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: "35px", color: "white" }}>{title}</Text>
            <a target="_blank" href={link}>
              <Image src={image} preview={false} width={600} />
            </a>
          </Col>
          <Col span={10}>
            <Paragraph
              style={{ color: "white", fontSize: "35px", textAlign: "center" }}
            >
              {description}, technologies used: {techUsed},{" "}
              {hasRepo === true ? (
                <a
                  href={gitHubRepo}
                  target={"_blank"}
                  style={{ textDecoration: "none", color: "wheat" }}
                >
                  Repository
                </a>
              ) : null}
            </Paragraph>
          </Col>
        </Row>
      </Content>
      <Footer style={{ background: "none" }}>
        <Carousel
          slidesToShow={3}
          dotPosition="bottom"
          autoplay
          draggable
          className="carouselClass"
        >
          {projects.map((project) => {
            return (
              <div
                id={project.id}
                onClick={() => {
                  const { details, image, link } = project;
                  const { textInfo, hasRepo, techUsed, gitRepo, title } =
                    details;
                  handleClickProject(
                    title,
                    image,
                    textInfo,
                    hasRepo,
                    gitRepo,
                    techUsed,
                    link
                  );
                  console.log(textInfo);
                }}
              >
                <Image src={project.image} preview={false} />
              </div>
            );
          })}
        </Carousel>
      </Footer>
    </Layout>
  );
};

export default ProjectsGrid;
