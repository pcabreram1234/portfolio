import React from "react";
import MainPicture from "../components/MainPicture";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Design from "./Design";
import MenuNavigation from "../components/MenuNavigation";

const Home = () => {
  return (
    <div>
      <MenuNavigation />
      <MainPicture />
      <AboutMe />
      <Projects />
      {/* <Skills />
      <Design /> */}
    </div>
  );
};

export default Home;
