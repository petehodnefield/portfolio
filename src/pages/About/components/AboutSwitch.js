import React, { useState } from "react";

const AboutSwitch = ({ aboutSwitch, setAboutSwitch }) => {
  return (
    <div className="about-switch-wrapper">
      <div className="about-cylinder-wrapper">
        <div
          onClick={() => setAboutSwitch(!aboutSwitch)}
          className={`about__cylinder ${
            aboutSwitch ? "about__cylinder-left" : "about__cylinder-right"
          }`}
        >
          <div
            className={`about__circle ${
              aboutSwitch ? "about__circle-left" : "about__circle-right"
            }`}
          ></div>
        </div>
      </div>
      <p className="p2"> {aboutSwitch ? "Music Producer" : "Web Devloper"}</p>
    </div>
  );
};

export default AboutSwitch;
