import React from "react";

export const HamMenu = ({ isOpen }) => {
  return (
    <div className={`ham__menu ${isOpen ? "ham__menu-open" : ""}`}>
      <ul className="ham__menu-list">
        <li className="ham__menu-li">
          <a href="/about" className="ham__menu-a">
            About
          </a>
        </li>
        <li className="ham__menu-li">
          <a href="/projects" className="ham__menu-a">
            Projects
          </a>
        </li>
        <li className="ham__menu-li">
          <a href="/contact" className="ham__menu-a">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
