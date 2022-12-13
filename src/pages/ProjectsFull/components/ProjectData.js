import React from "react";

const ProjectData = ({ project }) => {
  return (
    <section className="project-data-wrapper">
      <div className="project-text-wrapper">
        <h2 className="project__header">{project.name}</h2>
        <h3 className="project__sub-header">{project.logLine}</h3>
        <p className="p3 project__text">{project.description}</p>
        <div className="project-button-wrapper">
          <a
            className="project__deploy-link"
            target="_blank"
            href={project.repository}
          >
            <button className="btn btn-secondary btn-deploy">Repository</button>
          </a>
          <a
            className="project__link"
            target="_blank"
            href={project.liveDeployment}
          >
            <button className="btn btn-secondary btn-deploy">Live</button>
          </a>
        </div>
        <div className="project-tech-wrapper">
          <h5 className="project__tech-header">Tech used</h5>
          <ul className="project__ul">
            {project.technology.map((tech) => (
              <li className="project__li">{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="project-img-wrapper">
        <img className="project__img" src={project.image} />
      </div>
    </section>
  );
};

export default ProjectData;
