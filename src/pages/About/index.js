import React, { useState } from "react";
import Header from "../../components/Header/Header";
import AboutSwitch from "./components/AboutSwitch";
import ProdAbout from "./components/ProdAbout";
import WebAbout from "./components/WebAbout/index";

const About = () => {
  const [aboutSwitch, setAboutSwitch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <Header isOpen={isOpen} setIsOpen={setIsOpen}></Header>
      <AboutSwitch
        aboutSwitch={aboutSwitch}
        setAboutSwitch={setAboutSwitch}
      ></AboutSwitch>
      {!aboutSwitch ? (
        <WebAbout isOpen={isOpen} setIsOpen={setIsOpen}></WebAbout>
      ) : (
        <ProdAbout isOpen={isOpen} setIsOpen={setIsOpen}></ProdAbout>
      )}
    </div>
  );
};

export default About;
