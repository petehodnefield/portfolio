import React from "react";
import WebIcons from "../../../../../components/WebDevIcons";

const AboutDesc = () => {
  return (
    <section className="about-description-wrapper">
      <div className="about-header-wrapper">
        <h4 className="about__header">About Me</h4>
        <button className="btn btn-secondary">
          <a download href={require("../../../../../assets/resume.pdf")}>
            Resume
          </a>
        </button>
      </div>
      <p className="p2 about__text">
        I am a full-stack web developer utilizing a background in Audio
        Engineering and Psychology to help build practical applications and
        services for musicians. I earned a certificate in full stack web
        development through the University of Minnesota coding bootcamp. Skills
        in HTML, CSS, & JavaScript. I am a chronic learner who is passionate
        about teaching others along the way.
      </p>
      <WebIcons></WebIcons>
    </section>
  );
};

export default AboutDesc;
