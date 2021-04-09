import React, { ReactElement, useEffect, useState } from "react";

import { getWork } from "../../lib";

import "./styles/work.scss";

const Work = (): ReactElement => {
  const [workData, setWorkData] = useState([] as WorkInfo[]);

  useEffect(() => {
    if (workData?.length === 0) {
      setWorkData(getWork());
    }
  }, []);

  return (
    <div className="container">
      <div className="work__header">
        <h2 className="work__title">Work</h2>
        <p className="work__subtitle">Visit some of the works.</p>
      </div>

      <div className="work__wrap">
        {workData?.map((workItem: WorkInfo, index: number) => (
          <article key={`${index}_work_item`} className="work__article">
            <a href={workItem.url} target="_blank">
              <img
                className="work__image"
                src={workItem.imageUrl}
                alt={workItem.title}
                height="300"
              />
            </a>
            <h3 className="work__article-title">{workItem.title}</h3>
            <p className="work__article-description">{workItem.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Work;
