import React from "react";
import AboutSwitch from "../AboutSwitch";
import AboutDesc from "./components/AboutDesc";
import Skills from "./components/Skills";
import ProjectsSmall from "../../../../components/ProjectsSmall";
import PeteImgProd from "../../../../components/PeteImgProd";
import MusicProjects from "../../../../components/MusicProjects";
const ProdAbout = () => {
  return (
    <div className="about-wrapper">
      <div className="about-content-wrapper">
        <div className="wrapper">
          <AboutDesc></AboutDesc>
          <Skills></Skills>
        </div>
        <PeteImgProd className="about-img-wrapper"></PeteImgProd>
      </div>
      <MusicProjects></MusicProjects>
    </div>
  );
};

export default ProdAbout;
