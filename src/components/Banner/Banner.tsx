import React, { ReactElement } from "react";

import "./styles/banner.scss";

const Banner = (): ReactElement => {
  return (
    <section className="container banner__container">
      <h2 className="banner__title">VIANCH</h2>

      <div className="banner__info">
        <div className="banner__avatar-container">
          <img
            className="banner__avatar"
            src="/images/avatar.png"
            alt="avatar"
          />
        </div>

        <p className="banner__description">
          Full stack application Developer and photographer based in Bogotá
          Colombia. Developer at{" "}
          <a
            className="banner__link"
            href="https://www.todaytix.com/"
            target="_blank"
          >
            TodayTix Group
          </a>{" "}
          in New York and{" "}
          <a className="banner__link" href="https://zaga.dev/" target="_blank">
            Zaga{" "}
          </a>
          Colombia.
        </p>
      </div>
    </section>
  );
};

export default Banner;
