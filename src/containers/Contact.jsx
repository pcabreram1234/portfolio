import React from "react";
import { Typography, Image } from "antd";
import InitialConfing from "../util/config.json";
import "../styles/Contact.css";
const { Title, Text } = Typography;
const { contact } = InitialConfing[0].pages;
const Contact = () => {
  return (
    <div className="Contact_container">
      <Title>Contact</Title>
      <Text>Let me help you to create your new web solution</Text>
      <div className="Contact_list_container">
        {contact.map((item) => {
          return (
            <div className="Contact_item">
              <a href={item.link} target="_blank">
                <Image src={item.icon} preview={false} width={50} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
