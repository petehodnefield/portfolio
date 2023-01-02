import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ProjectModalSmall = ({ selectedProject }) => {
  return (
    <div className="project-modal-small-wrapper">
      <Link
        className="project-modal-link"
        to={`/projects/${selectedProject.name}`}
      >
        <div className="project-modal-text-wrapper">
          <Link
            className="project-modal-link"
            to={`/projects/${selectedProject.name}`}
          >
            <Icon
              className="project-modal-icon"
              icon="material-symbols:open-in-full-rounded"
            />
          </Link>
          <h4 className="project-modal__header">{selectedProject.name}</h4>
          <p className="p3 project-modal__description ">
            {selectedProject.description}
          </p>
          <img
            className="project-modal__img"
            src={require(`../assets/photos/${selectedProject.image}`)}
          />
        </div>
      </Link>
    </div>
  );
};

export default ProjectModalSmall;
