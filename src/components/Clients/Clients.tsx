import React, { ReactElement } from "react";

import "./styles/clients.scss";

const Clients = (): ReactElement => {
  return (
    <div className="container clients__container">
      <div className="clients__header">
        <h2 className="clients__title">Clients</h2>
        <h3 className="clients__subtitle">
          My last clients I have worked with
        </h3>
      </div>

      <div className="clients__row">
        <div className="client__wrap">
          <a
            href="https://www.todaytix.com/"
            target="_blank"
            className="client__link"
          >
            <img
              className="client__img"
              src="images/todaytix-logo.png"
              alt="TodayTix Group"
            />
          </a>
        </div>

        <div className="client__wrap">
          <a href="https://zaga.dev/" target="_blank" className="client__link">
            <img
              alt="Zagalabs"
              className="client__img"
              src="images/zaga-logo.png"
            />
          </a>
        </div>

        <div className="client__wrap">
          <a href="https://mayday.is/" target="_blank" className="client__link">
            <img
              alt="MayDay.is"
              className="client__img"
              src="images/mayday-logo.png"
            />
          </a>
        </div>

        <div className="client__wrap">
          <a
            href="https://caroogo.com/"
            target="_blank"
            className="client__link"
          >
            <img
              className="client__img"
              src="images/caroogo-logo.png"
              alt="Caroogo"
            />
          </a>
        </div>

        <div className="client__wrap">
          <a
            href="https://www.53w53.com/"
            target="_blank"
            className="client__link"
          >
            <img
              alt="53West53"
              className="client__img"
              src="images/53w53-logo.png"
            />
          </a>
        </div>

        <div className="client__wrap">
          <a href="https://huts.nyc/" target="_blank" className="client__link">
            <img
              alt="Huts"
              className="client__img"
              src="images/huts-logo.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Clients;
