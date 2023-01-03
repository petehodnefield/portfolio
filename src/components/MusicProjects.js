import React from "react";
import { musicData } from "../data/music-data";
import { Icon } from "@iconify/react";
const MusicProjects = ({ isOpen, setIsOpen }) => {
  return (
    <section className={`projects-wrapper ${isOpen ? "zindexState" : ""}`}>
      <h3 className="project__header-about">Projects</h3>
      <div className="project-cards-grid">
        {musicData.map((project) => (
          <div className="project__card-music">
            <a
              className="project__card-link"
              target="_blank"
              href={project.link}
            >
              <Icon className="project__card-icon" icon={project.icon} />

              <p1 className="project__card-name ">{project.name}</p1>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicProjects;
