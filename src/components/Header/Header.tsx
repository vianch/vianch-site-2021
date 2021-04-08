import React, { ReactElement } from "react";

import Navigation from "./Navigation";

import "./styles/header.scss";

const Header = (): ReactElement => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <img
            className="header__img"
            src="https://image.ibb.co/kcVou6/path3000.png"
          />
          <h1 className="header__title">
            VIANCH<span className="header__light">.com</span>
          </h1>
        </div>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
