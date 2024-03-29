import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import ProjectsGrid from "../../components/ProjectsGrid";
import { projectData } from "../../data/project-data";
import ProjectData from "./components/ProjectData";

const ProjectsFull = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chosenProject = useParams();
  const projectName = chosenProject.project;
  const [project, setProject] = useState();
  useEffect(() => {
    projectData.forEach((project) => {
      console.log(chosenProject, project);

      if (project.name === chosenProject.project) {
        setProject(project);
      } else {
        return;
      }
    });
  }, [chosenProject]);

  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}></Header>{" "}
      <div className="about-wrapper">
        {!project ? (
          <div>Loading...</div>
        ) : (
          <ProjectData
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            project={project}
          ></ProjectData>
        )}
        <ProjectsGrid
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          chosenProject={chosenProject.project}
        ></ProjectsGrid>
      </div>
    </div>
  );
};

export default ProjectsFull;
