import React from "react";
import { Icon } from "@iconify/react";
const WebDevIcons = () => {
  return (
    <div className="about-icon-wrapper">
      <a href="">
        <Icon className="about__icon" icon="mdi:github" />
      </a>
      <a href="">
        <Icon className="about__icon" icon="mdi:linkedin" />
      </a>
      <a href="">
        <Icon className="about__icon" icon="ic:round-email" />
      </a>
    </div>
  );
};

export default WebDevIcons;
