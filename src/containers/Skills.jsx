import React from "react";
import { Image, Typography } from "antd";
import initialConfig from "../util/config.json";
import "../styles/Skills.css";
const { Text } = Typography;
const { skills } = initialConfig[0].pages;

const Skills = () => {
  return (
    <div className="skills_container">
      {skills.map((skill) => {
        return (
          <div className="skill_card">
            <Image src={skill.icon} width={130} preview={false} />
            <Text style={{ color: "white" }}>{skill.text}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
