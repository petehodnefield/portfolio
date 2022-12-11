import React, { useState } from "react";

const NavLinks = () => {
  const [pageSelected, setPageSelected] = useState("");

  console.log(pageSelected);
  return (
    <div className="nav-links-wrapper">
      <ul className="nav__ul">
        <li className="nav__li">
          <a
            className={`nav__a p3 ${
              pageSelected === "About?" ? "selected" : ""
            }`}
            href="/about"
          >
            About
          </a>
        </li>
        <li className="nav__li">
          <a
            onClick={() => setPageSelected("projects")}
            className="nav__a p3"
            href="/projects"
          >
            Projects
          </a>
        </li>
        <li className="nav__li">
          <a className="nav__a p3" href="/contact">
            Contact
          </a>
        </li>
        <li className="nav__li">
          <a
            className="nav__a p3"
            download
            href={require("../../../assets/resume.pdf")}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
