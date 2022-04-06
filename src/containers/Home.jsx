import React from "react";
import MainPicture from "../components/MainPicture";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Design from "./Design";
import SocialBarner from "../components/SocialBarner";
import "../styles/Home.css";
const Home = () => {
  return (
    <div>
      <SocialBarner />
      <MainPicture />
      <AboutMe />
      <Projects />
      <Skills />
      <Design />
    </div>
  );
};

export default Home;
