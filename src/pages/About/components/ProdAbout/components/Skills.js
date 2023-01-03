import React from "react";

const Skills = () => {
  const musicSkills = [
    "Ableton Live",
    "FL Studio",
    "Electric Guitar",
    "Acoustic Guitar",
    "Classical Guitar",
  ];

  return (
    <section className="skills-wrapper">
      <h4>Skills</h4>
      <div className="skills-list-wrapper">
        <ul className="skills__ul">
          {musicSkills.map((skill) => (
            <li className="p4 skills__li skills__front-end">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
