import React from "react";
import { musicData } from "../data/music-data";
import { Icon } from "@iconify/react";
const MusicProjects = () => {
  return (
    <div>
      {" "}
      <section className="projects-wrapper">
        <h3 className="project__header-about">Projects</h3>
        <div className="project-cards-grid">
          {musicData.map((project) => (
            <div className="project__card-music">
              <a className="project__card-link" href="">
                <h3 className="project__card-name ">{project.name}</h3>
                <img className="project__card-img" src={project.img} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MusicProjects;
