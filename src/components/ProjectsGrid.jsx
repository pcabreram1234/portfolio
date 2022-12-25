import React, { useState } from "react";
import { Image, Typography, Row, Space, Col } from "antd";
import InitialConfig from "../util/config.json";
import "../styles/Projects.css";

const { projects } = InitialConfig[0].pages;
const { Title, Text, Paragraph } = Typography;
const ProjectsGrid = () => {
  const [projectInfo, setProjectInfo] = useState({
    id: "",
    link: "",
    image: "",
    text: "",
    details: {},
  });

  const handleProjectClick = ({ id, link, image, text, details }) => {
    setProjectInfo({
      id: id,
      details: details,
      image: image,
      link: link,
      text: text,
    });
    console.log(projectInfo);
  };

  const style = {
    background: "#0092ff",
    padding: "8px 0",
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 505px)",
        gridTemplateRows: "repeat(3, 260px)",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {projects.map((project) => {
        return (
          <Col
            className="gutter-row ProjectItem__container "
            span={6}
            key={project.id}
          >
            <Image
              src={project.image}
              width={500}
              preview={false}
              onClick={() => {
                handleProjectClick(project);
              }}
              className="ProjectItem--image"
            />
          </Col>
        );
      })}
    </div>
  );
};

export default ProjectsGrid;
