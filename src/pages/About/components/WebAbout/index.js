import React from "react";
import AboutSwitch from "../AboutSwitch";
import AboutDesc from "./components/AboutDesc";
import Skills from "./components/Skills";
import ProjectsSmall from "../../../../components/ProjectsSmall";
import PeteImgWeb from "../../../../components/PeteImgWeb";
const WebAbout = () => {
  return (
    <div className="about-wrapper">
      <div>
        <AboutDesc></AboutDesc>
        <Skills></Skills>
      </div>
      <PeteImgWeb className="about-img-wrapper"></PeteImgWeb>
      <ProjectsSmall></ProjectsSmall>
    </div>
  );
};

export default WebAbout;
