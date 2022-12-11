import React from "react";

export const NavResume = () => {
  return (
    <div className="nav__resume-wrapper">
      <a download href={require("../../../assets/resume.pdf")}>
        <button className="btn btn-secondary btn-nav p3 ">Resume</button>
      </a>
    </div>
  );
};
