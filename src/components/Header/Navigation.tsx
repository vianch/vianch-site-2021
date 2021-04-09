import React, { ReactElement } from "react";

const Navigation = (): ReactElement => {
  return (
    <div className="header__menu">
      <nav id="navbar" className="header__nav collapse">
        <ul className="header__elenco">
          <li className="header__el">
            <a href="#" className="header__link">
              About
            </a>
          </li>
          <li className="header__el">
            <a href="#" className="header__link">
              Git
            </a>
          </li>
          <li className="header__el">
            <a href="#" className="header__link">
              Clients
            </a>
          </li>
          <li className="header__el">
            <a href="#" className="header__link">
              Work
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
