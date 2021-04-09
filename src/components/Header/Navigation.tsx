import React, { ReactElement } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navigation = (): ReactElement => {
  return (
    <div className="header__menu">
      <nav id="navbar" className="header__nav collapse">
        <ul className="header__elenco">
          <li className="header__el">
            <AnchorLink className="header__link" href="#about">
              About
            </AnchorLink>
          </li>
          <li className="header__el">
            <AnchorLink className="header__link" href="#git">
              Git
            </AnchorLink>
          </li>
          <li className="header__el">
            <AnchorLink className="header__link" href="#clients">
              Clients
            </AnchorLink>
          </li>
          <li className="header__el">
            <AnchorLink className="header__link" href="#work">
              Work
            </AnchorLink>
          </li>
          <li className="header__el">
            <AnchorLink className="header__link" href="#contact">
              Contact
            </AnchorLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
