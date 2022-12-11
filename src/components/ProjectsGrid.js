import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { projectData } from "../data/project-data";
import ProjectModalSmall from "./ProjectModalSmall";

const ProjectsGrid = ({ chosenProject }) => {
  const [modalOpen, setModalOpen] = useState();
  const [selectedModal, setSelectedModal] = useState();

  return (
    <section className="projects-grid-wrapper">
      <h4 className="project-grid__header">Other Projects</h4>
      <div className="project-grid-cards-grid">
        {projectData.map((project) =>
          project.name === chosenProject ? (
            ""
          ) : (
            <div
              onMouseEnter={() => {
                setSelectedModal(project.name);
                setModalOpen(!modalOpen);
              }}
              onClick={() => {
                setSelectedModal(project.name);
                setModalOpen(true);
              }}
              onMouseLeave={() => setModalOpen(false)}
              className="project-grid__card"
            >
              {modalOpen && selectedModal === project.name ? (
                <ProjectModalSmall
                  selectedProject={project}
                ></ProjectModalSmall>
              ) : (
                ""
              )}
              <Icon icon={project.icon} className="project__card-icon" />
              <p className="project__card-name p1">{project.name}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
