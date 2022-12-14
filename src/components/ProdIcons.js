import React from "react";
import { Icon } from "@iconify/react";
const ProdIcons = () => {
  return (
    <div className="about-icon-wrapper">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.tiktok.com/@mongamonga_"
      >
        <Icon className="about__icon" icon="ic:twotone-tiktok" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/mongamonga_/?hl=en"
      >
        <Icon className="about__icon" icon="ri:instagram-line" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://open.spotify.com/playlist/1GHkXFTgtiWDUdHJzIJHIO?si=e2b74f1cf09343b5"
      >
        <Icon className="about__icon" icon="ri:spotify-fill" />
      </a>
    </div>
  );
};

export default ProdIcons;
