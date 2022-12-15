import React, { useState } from "react";
import HamIcon from "./components/HamIcon";
import { HamMenu } from "./components/HamMenu";
import NavLinks from "./components/NavLinks";
import { Link } from "react-router-dom";
const Header = ({ isOpen, setIsOpen }) => {
  const [pageSelected, setPageSelected] = useState("");

  return (
    <header className="header">
      <h1 className="h1">
        <Link to="/" className="h1-link">
          Pete Hodnefield
        </Link>
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
