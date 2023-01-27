import React from "react";
import initialConfig from "../util/config.json";
import "../styles/Home.css";
import { Typography, Row, Layout } from "antd";

const MainPicture = () => {
  const { Title } = Typography;
  const { Content } = Layout;

  return (
    <Layout
      style={{
        backgroundColor: "transparent",
        height: "100vh",
      }}
      className="Home__Container"
    >
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title
          style={{
            color: "#FFFFFF",
            textAlign: "center",
            fontSize: "50px",
          }}
          className="AboutMe__Title"
        >
          {initialConfig[0].pages.Index.title}
        </Title>
      </Content>
    </Layout>
  );
};

export default MainPicture;
