import React, { useState } from "react";
import HamIcon from "./components/HamIcon";
import { HamMenu } from "./components/HamMenu";
import NavLinks from "./components/NavLinks";
import { NavResume } from "./components/NavResume";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <h1 className="h1">
        <a href="/about" className="h1-link">
          Pete Hodnefield
        </a>
      </h1>
      <HamIcon isOpen={isOpen} setIsOpen={setIsOpen}></HamIcon>
      <HamMenu isOpen={isOpen}></HamMenu>
      <NavLinks></NavLinks>
      {/* <NavResume></NavResume> */}
    </header>
  );
};

export default Header;
