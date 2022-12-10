import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <header className="header">
      <h1 className="h1">Pete Hodnefield</h1>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`ham ${isOpen ? "ham__open" : "ham__close"}`}
      >
        <div className="ham__line"></div>
        <div className="ham__line"></div>
        <div className="ham__line"></div>
      </div>
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
    </header>
  );
};

export default Header;
