import React from "react";

const HamIcon = ({ setIsOpen, isOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`ham ${isOpen ? "ham__open" : "ham__close"}`}
    >
      <div className="ham__line"></div>
      <div className="ham__line"></div>
      <div className="ham__line"></div>
    </div>
  );
};

export default HamIcon;
