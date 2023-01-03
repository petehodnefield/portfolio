import React from "react";

const Skills = () => {
  const frontEndSkills = [
    "JavaScript ES6",
    "React.js",
    "JQuery",
    "Handlebars.js",
    "HTML5",
    "CSS3",
    "Bootstrap",
  ];
  const backEndSkills = [
    "Express.js",
    "Node.js",
    "MongoDB",
    "REST APIs",
    "MySQL",
    "GraphQL",
    "AWS S3",
  ];
  return (
    <section className="skills-wrapper">
      <h4>Skills</h4>
      <div className="skills-list-wrapper">
        <ul className="skills__ul">
          {frontEndSkills.map((skill) => (
            <li className="p3 skills__li skills__front-end">{skill}</li>
          ))}
        </ul>
        <ul className="skills__ul">
          {backEndSkills.map((skill) => (
            <li className="p3 skills__li skills__back-end">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
