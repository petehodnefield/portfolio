import React from "react";
import { Icon } from "@iconify/react";

const ProjectModalSmall = ({ selectedProject }) => {
  return (
    <div className="project-modal-small-wrapper">
      <a
        className="project-modal-link"
        href={`/projects/${selectedProject.name}`}
      >
        <div className="project-modal-text-wrapper">
          <a
            className="project-modal-link"
            href={`/projects/${selectedProject.name}`}
          >
            <Icon
              className="project-modal-icon"
              icon="material-symbols:open-in-full-rounded"
            />
          </a>
          <h4 className="project-modal__header">{selectedProject.name}</h4>
          <p className="p3 project-modal__description ">
            {selectedProject.description}
          </p>
          <img className="project-modal__img" src={selectedProject.image} />
        </div>
      </a>
    </div>
  );
};

export default ProjectModalSmall;
