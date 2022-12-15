import React, { useState } from "react";
import Header from "../../components/Header/Header.js";
import { Link } from "react-router-dom";

const StartPage = () => {
  const [isFocused, setIsFocused] = useState("");
  return (
    <div className="sp-container">
      <div className="sp__header-wrapper">
        <h1 className="sp__name">Pete Hodnefield</h1>
        <p className="p1 bold sp__desc">
          <span className="sp__normal">Web Developer</span> &{" "}
          <span className="sp__normal">Music Producer</span>
        </p>
      </div>
      <ul className="sp__ul">
        <li
          onMouseOver={() => setIsFocused("About")}
          onMouseLeave={() => setIsFocused("")}
          className="sp__li"
        >
          <Link
            className={`sp__a ${isFocused === "About" ? "sp__selected" : ""}`}
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="sp__li">
          <Link
            onMouseOver={() => setIsFocused("Projects")}
            onMouseLeave={() => setIsFocused("")}
            className={`sp__a ${
              isFocused === "Projects" ? "sp__selected" : ""
            }`}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="sp__li">
          <Link
            onMouseOver={() => setIsFocused("Contact")}
            onMouseLeave={() => setIsFocused("")}
            className={`sp__a ${isFocused === "Contact" ? "sp__selected" : ""}`}
            to="/portfolio/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StartPage;
