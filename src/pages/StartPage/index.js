import React, { useState } from "react";

const StartPage = () => {
  const [name, setName] = useState("Pete Hodnefield");
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="sp-container">
      <h1 className="sp__name">{name}</h1>
      <p className="p1 bold sp__desc">
        <span
          className={`${isHovered ? "sp__highlight" : "sp__normal"}`}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Web Developer
        </span>{" "}
        &{" "}
        <span
          className={`${
            name === "mongamonga_" ? "sp__highlight" : "sp__normal"
          }`}
          onMouseLeave={() => setName("Pete Hodnefield")}
          onMouseOver={() => setName("mongamonga_")}
        >
          Music Producer
        </span>
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
