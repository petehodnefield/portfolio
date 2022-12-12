import React from "react";

const HamIcon = ({ setIsOpen, isOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`ham ${isOpen ? "ham__open" : ""}`}
    >
      <div
        className={`ham__line ${isOpen ? "ham__line-open" : "ham__line-close"}`}
      ></div>
      <div
        className={`ham__line ${isOpen ? "ham__line-open" : "ham__line-close"}`}
      ></div>
      <div
        className={`ham__line ${isOpen ? "ham__line-open" : "ham__line-close"}`}
      ></div>
    </div>
  );
};

export default HamIcon;
