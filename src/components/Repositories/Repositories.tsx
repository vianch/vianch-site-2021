import React, { ReactElement, useState, useEffect } from "react";
import { Card } from "../core";

import { getRepositories } from "../../lib";

import "./styles/repositories.scss";

const Repositories = (): ReactElement => {
  const [repositories, setRepositories] = useState([] as Repository[]);

  useEffect(() => {
    if (repositories?.length === 0) {
      setRepositories(getRepositories());
    }
  }, []);

  return (
    <div className="container repositories__container">
      <h2 id="git" className="repositories__title">
        <img src="images/codercat.png" height="65" alt="GitHub" />
        GitHub Projects
      </h2>

      <div className="row">
        {repositories?.map((repository: Repository, index: number) => (
          <div key={`${index}_repo`} className="four columns">
            <a
              className="repositories__link"
              href={repository.url}
              target="_blank"
            >
              <Card
                className="repositories__card"
                title={repository.title}
                description={repository.description}
                animate
              >
                <span className="repositories__technology">
                  <img
                    className="repositories__technology-image"
                    src="images/brackets.svg"
                    alt="brackets"
                  />
                  {repository.technology}
                </span>
              </Card>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories;
