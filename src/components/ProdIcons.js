import React from "react";
import { Icon } from "@iconify/react";
const ProdIcons = () => {
  return (
    <div className="about-icon-wrapper">
      <a href="">
        <Icon className="about__icon" icon="ic:twotone-tiktok" />
      </a>
      <a href="">
        <Icon className="about__icon" icon="ri:instagram-line" />
      </a>
      <a href="">
        <Icon className="about__icon" icon="ri:spotify-fill" />
      </a>
    </div>
  );
};

export default ProdIcons;
