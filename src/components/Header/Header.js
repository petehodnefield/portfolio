import React, { useState } from "react";
import HamIcon from "./components/HamIcon";
import { HamMenu } from "./components/HamMenu";
import NavLinks from "./components/NavLinks";

const Header = ({ isOpen, setIsOpen }) => {
  const [pageSelected, setPageSelected] = useState("");

  return (
    <header className="header">
      <h1 className="h1">
        <a href="/" className="h1-link">
          Pete Hodnefield
        </a>
      </h1>
      <HamIcon isOpen={isOpen} setIsOpen={setIsOpen}></HamIcon>
      <HamMenu isOpen={isOpen}></HamMenu>
      <NavLinks
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      ></NavLinks>
    </header>
  );
};

export default Header;