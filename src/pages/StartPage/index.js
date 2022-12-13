import React, { useState } from "react";
import Header from "../../components/Header/Header.js";

const StartPage = () => {
  return (
    <div className="sp-container">
      <h1 className="sp__name">Pete Hodnefield</h1>
      <p className="p1 bold sp__desc">
        <span className="sp__normal">Web Developer</span> &{" "}
        <span className="sp__normal">Music Producer</span>
      </p>
      <ul className="sp__ul">
        <li className="sp__li">
          <a className="sp__a" href="/about">
            About
          </a>
        </li>
        <li className="sp__li">
          <a className="sp__a" href="/projects">
            Projects
          </a>
        </li>
        <li className="sp__li">
          <a className="sp__a" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StartPage;
