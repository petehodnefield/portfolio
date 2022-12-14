import React, { useState } from "react";
import Header from "../../components/Header/Header.js";

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
          <a
            className={`sp__a ${isFocused === "About" ? "sp__selected" : ""}`}
            href="/about"
          >
            About
          </a>
        </li>
        <li className="sp__li">
          <a
            onMouseOver={() => setIsFocused("Projects")}
            onMouseLeave={() => setIsFocused("")}
            className={`sp__a ${
              isFocused === "Projects" ? "sp__selected" : ""
            }`}
            href="/projects"
          >
            Projects
          </a>
        </li>
        <li className="sp__li">
          <a
            onMouseOver={() => setIsFocused("Contact")}
            onMouseLeave={() => setIsFocused("")}
            className={`sp__a ${isFocused === "Contact" ? "sp__selected" : ""}`}
            href="/contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StartPage;
