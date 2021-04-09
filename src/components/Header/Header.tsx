import React, { ReactElement } from "react";

import Navigation from "./Navigation";
import Logo from "../Logo/Logo";

import "./styles/header.scss";

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
