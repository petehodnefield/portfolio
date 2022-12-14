import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ProjectsGridPg from "../../components/ProjectsGridPg";

const ProjectPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <Header isOpen={isOpen} setIsOpen={setIsOpen}></Header>
      <ProjectsGridPg isOpen={isOpen} setIsOpen={setIsOpen}></ProjectsGridPg>
    </div>
  );
};

export default ProjectPage;
