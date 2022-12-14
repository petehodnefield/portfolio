import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { projectData } from "../data/project-data";
import ProjectModalSmall from "./ProjectModalSmall";
import { useWindowDimensions } from "./utils/WindowDimesions";

const ProjectsGridPg = ({ chosenProject, isOpen, setIsOpen }) => {
  const [modalOpen, setModalOpen] = useState();
  const [selectedModal, setSelectedModal] = useState();
  const currentWidth = useWindowDimensions();

  return (
    <section
      className={`projects-pg-grid-wrapper ${
        isOpen && currentWidth <= 1080 ? "zindexState" : ""
      }`}
    >
      <h3 className="project-pg-grid__header">Projects</h3>
      <div className="project-pg-grid">
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
              className="project-grid__card bshadow"
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

export default ProjectsGridPg;
