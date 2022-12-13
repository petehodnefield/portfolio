import React, { useState } from "react";
import Header from "../../components/Header/Header";
import AboutSwitch from "./components/AboutSwitch";
import ProdAbout from "./components/ProdAbout";
import WebAbout from "./components/WebAbout/index";

const About = () => {
  const [aboutSwitch, setAboutSwitch] = useState(false);
  return (
    <div>
      <Header></Header>
      <AboutSwitch
        aboutSwitch={aboutSwitch}
        setAboutSwitch={setAboutSwitch}
      ></AboutSwitch>
      {!aboutSwitch ? <WebAbout></WebAbout> : <ProdAbout></ProdAbout>}
    </div>
  );
};

export default About;