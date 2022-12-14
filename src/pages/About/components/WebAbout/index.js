import React from "react";
import AboutSwitch from "../AboutSwitch";
import AboutDesc from "./components/AboutDesc";
import Skills from "./components/Skills";
import ProjectsSmall from "../../../../components/ProjectsSmall";
import PeteImgWeb from "../../../../components/PeteImgWeb";
const WebAbout = ({ isOpen, setIsOpen }) => {
  return (
    <div className="about-wrapper">
      <div className="about-content-wrapper">
        <div className="wrapper">
          <AboutDesc></AboutDesc>
          <Skills></Skills>
        </div>
        <PeteImgWeb className="about-img-wrapper"></PeteImgWeb>
      </div>
      <ProjectsSmall isOpen={isOpen} setIsOpen={setIsOpen}></ProjectsSmall>
    </div>
  );
};

export default WebAbout;
