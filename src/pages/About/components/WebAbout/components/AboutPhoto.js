import React from "react";

import { Icon } from "@iconify/react";
import pete from "../../../../../assets/photos/headshot.jpg";
import WebIcons from "../../../../../components/WebDevIcons";

const AboutPhoto = () => {
  return (
    <section className="about-image-icons-wrapper">
      <div className="about-image-wrapper">
        <img className="about__img" src={pete} />
      </div>
      <WebIcons></WebIcons>
    </section>
  );
};

export default AboutPhoto;
