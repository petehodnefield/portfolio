import React from "react";
import { Icon } from "@iconify/react";
const WebDevIcons = () => {
  return (
    <div className="about-icon-wrapper">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/petehodnefield?tab=repositories"
      >
        <Icon className="about__icon" icon="mdi:github" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/petehodnefield/"
      >
        <Icon className="about__icon" icon="mdi:linkedin" />
      </a>
      <a href="mailto:hodne037@umn.edu">
        <Icon className="about__icon" icon="ic:round-email" />
      </a>
    </div>
  );
};

export default WebDevIcons;
