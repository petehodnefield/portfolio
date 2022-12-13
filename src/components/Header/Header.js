import React, { useState } from "react";
import HamIcon from "./components/HamIcon";
import { HamMenu } from "./components/HamMenu";
import NavLinks from "./components/NavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <h1 className="h1">
        <a href="/" className="h1-link">
          Pete Hodnefield
        </a>
      </h1>
      <HamIcon isOpen={isOpen} setIsOpen={setIsOpen}></HamIcon>
      <HamMenu isOpen={isOpen}></HamMenu>
      <NavLinks></NavLinks>
    </header>
  );
};

export default Header;
