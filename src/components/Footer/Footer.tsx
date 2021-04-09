import React, { ReactElement } from "react";
import Logo from "../Logo/Logo";

import "./styles/footer.scss";

const Footer = (): ReactElement => {
  return (
    <div className="footer__wrap">
      <a
        href="https://discord.gg/UVgXjgEXX4"
        target="_blank"
        className="footer__discord-wrap"
      >
        <img
          className="footer__discord-image"
          src="images/discord.png"
          height="32"
          alt="discord"
        />
        <span className="footer__discord-message">
          Join my Discord server if you want to contact me, code with me, play
          games together or just hang out.
        </span>
      </a>

      <div className="container footer__container">
        <Logo contrast />

        <div className="footer__links-wrap">
          <a
            href="https://twitter.com/vianch_tog"
            target="_blank"
            className="footer__social-link"
          >
            <img
              className="footer__social-icon"
              src="images/twitter.png"
              alt="twitter"
              height="28"
            />
          </a>

          <a
            href="https://www.instagram.com/vianch_tog/"
            target="_blank"
            className="footer__social-link"
          >
            <img
              className="footer__social-icon"
              src="images/instagram.png"
              alt="twitter"
              height="28"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/vianch/"
            target="_blank"
            className="footer__social-link"
          >
            <img
              className="footer__social-icon"
              src="images/linkedin.png"
              alt="twitter"
              height="28"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
