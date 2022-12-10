import React from "react";
import { Icon } from "@iconify/react";

const ProjectModalSmall = ({ selectedProject }) => {
  return (
    <div className="project-modal-small-wrapper">
      <div className="project-modal-text-wrapper">
        <Icon
          className="project-modal-icon"
          icon="material-symbols:open-in-full-rounded"
        />

        <h5 className="project-modal__header">{selectedProject.name}</h5>
        <p className="p4 project-modal__description ">
          {selectedProject.description}
        </p>
        <img className="project-modal__img" src={selectedProject.image} />
      </div>
    </div>
  );
};

export default ProjectModalSmall;
