import React from "react";
import initialConfig from "../util/config.json";
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
        >
          {initialConfig[0].pages.Index.title}
        </Title>
      </Content>
    </Layout>
  );
};

export default MainPicture;
