import React from "react";
import MainPicture from "../components/MainPicture";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ProjectsMobile from "./ProjectsMobile";
import Skills from "./Skills";
import Contact from "./Contact";
import MenuNavigation from "../components/MenuNavigation";
import useMatchMedia from "../hooks/useMatchMedia";

const Home = () => {
  const responsiveMediaQueryi = "(max-width: 850px)";
  return (
    <div>
      <MenuNavigation />
      <MainPicture />
      <AboutMe />
      {useMatchMedia(responsiveMediaQueryi) === true ? (
        <ProjectsMobile />
      ) : (
        <Projects />
      )}
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
