import React from "react";
import { Link } from "react-router-dom";
export const HamMenu = ({ isOpen }) => {
  return (
    <div className={`ham__menu ${isOpen ? "ham__menu-open" : ""}`}>
      <ul className="ham__menu-list">
        <li className="ham__menu-li">
          <Link to="/about" className="ham__menu-a">
            About
          </Link>
        </li>
        <li className="ham__menu-li">
          <Link to="/projects" className="ham__menu-a">
            Projects
          </Link>
        </li>
        <li className="ham__menu-li">
          <Link to="/contact" className="ham__menu-a">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
