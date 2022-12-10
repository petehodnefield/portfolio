import React, { useState } from "react";
import AboutSwitch from "./components/AboutSwitch";
import ProdAbout from "./components/ProdAbout";
import WebAbout from "./components/WebAbout/index";

const About = () => {
  const [aboutSwitch, setAboutSwitch] = useState(false);
  return (
    <div>
      <AboutSwitch
        aboutSwitch={aboutSwitch}
        setAboutSwitch={setAboutSwitch}
      ></AboutSwitch>
      {!aboutSwitch ? <WebAbout></WebAbout> : <ProdAbout></ProdAbout>}
    </div>
  );
};

export default About;
