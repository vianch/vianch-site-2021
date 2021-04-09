import React, { ReactElement } from "react";
import { Card } from "../core";

import "./styles/repositories.scss";

const Repositories = (): ReactElement => {
  return (
    <div className="container repositories__container">
      <h2 className="repositories__title">
        <img src="images/codercat.png" height="65" alt="GitHub" />
        GitHub Repositories
      </h2>

      <div className="row">
        <div className="four columns">
          <Card
            title="vianch/vianch-site-2021"
            className="repositories__card"
            description="Vianch portfolio 2021"
            animate
          >
            <span className="repositories__technology">
              <img
                className="repositories__technology-image"
                src="images/brackets.svg"
                alt="brackets"
              />
              TypeScript
            </span>
          </Card>
        </div>
        <div className="four columns">
          <Card
            animate
            className="repositories__card"
            title="vianch/smooth-server"
            description="A server to deploy local environments or static code"
          >
            <span className="repositories__technology">
              <img
                className="repositories__technology-image"
                src="images/brackets.svg"
                alt="brackets"
              />
              JavaScript
            </span>
          </Card>
        </div>
        <div className="four columns">
          <Card
            animate
            className="repositories__card"
            title="vianch/ng2-toasty-toaster"
            description="Messages and exception handler based on toasty"
          >
            <span className="repositories__technology">
              <img
                className="repositories__technology-image"
                src="images/brackets.svg"
                alt="brackets"
              />
              JavaScript
            </span>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
