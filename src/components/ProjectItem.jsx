import React from "react";
import GitHubIcon from "../assets/static/GitHub.png";
import { Image, Row, Col, Typography, Anchor, Button } from "antd";
const ProjectItem = (props) => {
  const { Title, Text } = Typography;
  const { Link } = Anchor;
  function hasGitRepo() {
    if (props.hasRepo) {
      return (
        <Button
          type="link"
          onClick={() => {
            goToPage(props.gitRepoLink);
          }}
        >
          <Image src={GitHubIcon} />
        </Button>
      );
    }
  }

  function goToPage(page) {
    window.open(page, "_blank");
  }

  return (
    <Row>
      <Col span={14}>
        <Title>{props.title}</Title>
        <Anchor>
          <Link>
            <Image src={props.image} preview={false} width="100%" />
          </Link>
        </Anchor>
      </Col>

      <Col span={10}>
        <Text>{props.text - info}</Text>
      </Col>
    </Row>
  );
};

export default ProjectItem;
