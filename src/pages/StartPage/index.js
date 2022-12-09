import React, { useState } from "react";

const StartPage = () => {
  const [name, setName] = useState("Pete Hodnefield");
  return (
    <div className="sp-container">
      <h1 className="sp__name">{name}</h1>
      <p className="p1 bold sp__desc">
        Web Developer &{" "}
        <span
          onMouseLeave={() => setName("Pete Hodnefield")}
          onMouseOver={() => setName("mongamonga_")}
        >
          Music Producer
        </span>
      </p>
      <ul className="sp__ul">
        <li className="sp__li">
          <a className="sp__a" href="#">
            About
          </a>
        </li>
        <li className="sp__li">
          <a className="sp__a" href="#">
            Projects
          </a>
        </li>
        <li className="sp__li">
          <a className="sp__a" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StartPage;
