import React from "react";
import AboutSwitch from "../AboutSwitch";
import AboutDesc from "./components/AboutDesc";
import Skills from "./components/Skills";
import ProjectsSmall from "../../../../components/ProjectsSmall";
import PeteImgProd from "../../../../components/PeteImgProd";
import MusicProjects from "../../../../components/MusicProjects";
const ProdAbout = ({ isOpen, setIsOpen }) => {
  return (
    <div className="about-wrapper">
      <div className="about-content-wrapper">
        <div className="wrapper">
          <AboutDesc></AboutDesc>
          <Skills></Skills>
        </div>
        <PeteImgProd className="about-img-wrapper"></PeteImgProd>
      </div>
      <MusicProjects isOpen={isOpen} setIsOpen={setIsOpen}></MusicProjects>
    </div>
  );
};

export default ProdAbout;
