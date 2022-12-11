import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProjectsGrid from "../../components/ProjectsGrid";
import { projectData } from "../../data/project-data";
import ProjectData from "./components/ProjectData";

const ProjectsFull = () => {
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
  }, []);

  return (
    <div>
      {!project ? (
        <div>Loading...</div>
      ) : (
        <ProjectData project={project}></ProjectData>
      )}
      <ProjectsGrid chosenProject={chosenProject.project}></ProjectsGrid>
    </div>
  );
};

export default ProjectsFull;
