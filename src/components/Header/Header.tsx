import React, { ReactElement } from "react";

import Navigation from "./Navigation";

import "./styles/header.scss";
import Logo from "../Logo/Logo";

const Header = (): ReactElement => {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
