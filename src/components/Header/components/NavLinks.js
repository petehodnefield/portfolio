import React, { useState } from "react";

import { Link } from "react-router-dom";
const NavLinks = ({ pageSelected, setPageSelected }) => {
  console.log(pageSelected);
  const [resumeHover, setResumeHover] = useState(false);

  console.log(pageSelected);
  return (
    <div className="nav-links-wrapper">
      <ul className="nav__ul">
        <li className="nav__li">
          <Link
            onClick={() => setPageSelected("About")}
            className={`nav__a p3 ${
              pageSelected === "About" ? "selected" : ""
            }`}
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={() => setPageSelected("Projects")}
            className={`nav__a p3 ${
              pageSelected === "Projects" ? "selected" : ""
            }`}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={() => setPageSelected("Contact")}
            className={`nav__a p3 ${
              pageSelected === "Contact" ? "selected" : ""
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li className="nav__li">
          <a
            className={`nav__a p3 ${resumeHover ? "selected" : ""}`}
            download
            href={require("../../../assets/resume.pdf")}
            onMouseEnter={() => setResumeHover(true)}
            onMouseLeave={() => setResumeHover(false)}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
