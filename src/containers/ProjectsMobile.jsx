import React from "react";
import { Layout, Typography, Image } from "antd";
import InitialConfig from "../util/config.json";
import "../styles/ProjectsMobile.css";
const { projects } = InitialConfig[0].pages;
const { Content, Header } = Layout;
const { Title } = Typography;
const ProjectsMobile = () => {
  return (
    <Layout
      style={{ background: "transparent" }}
      className="ProjectsMobile_container"
    >
      <Header style={{ background: "transparent" }}>
        <Title
          style={{ color: "white", textAlign: "center", fontSize: "50px" }}
        >
          Works
        </Title>
      </Header>
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          height: "100vh",
        }}
      >
        {projects.map((project) => {
          return (
            <div id={project.id} style={{ gap: "50px" }}>
              <a target="_blank" href={project.link}>
                <Image src={project.image} preview={false} width={300} />
              </a>
            </div>
          );
        })}
      </Content>
    </Layout>
  );
};

export default ProjectsMobile;
