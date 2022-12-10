import React from "react";
import AboutSwitch from "../AboutSwitch";
import AboutDesc from "./components/AboutDesc";
import Skills from "./components/Skills";
import ProjectsSmall from "../../../../components/ProjectsSmall";
import PeteImgProd from "../../../../components/PeteImgProd";
const ProdAbout = () => {
  return (
    <div className="about-wrapper">
      <AboutDesc></AboutDesc>
      <div className="about-prod-skills-photo-wrapper">
        <Skills></Skills>
      </div>
      <PeteImgProd className="about-img-wrapper"></PeteImgProd>

      <ProjectsSmall></ProjectsSmall>
    </div>
  );
};

export default ProdAbout;
