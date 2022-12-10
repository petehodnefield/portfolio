import React from "react";
import { Icon } from "@iconify/react";
import pete from "../assets/photos/headshot.jpg";
import WebDevIcons from "./WebDevIcons";
const PeteImgWeb = () => {
  return (
    <section className="about-image-icons-wrapper">
      <div className="about-image-wrapper">
        <img className="about__img" src={pete} />
      </div>
      <WebDevIcons />
    </section>
  );
};

export default PeteImgWeb;
