import React, { ReactElement } from "react";

import "./styles/card.scss";

interface CardProps {
  title: string;
  children?: ReactElement;
  className: string;
  description: string;
  animate?: boolean;
}

const Card = ({
  title,
  className,
  description,
  animate = false,
  children = null,
}: CardProps): ReactElement => {
  return (
    <div
      className={`${className} card__wrap ${animate ? "card__animated" : ""}`}
    >
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      {children && <div>{children}</div>}
    </div>
  );
};

export default Card;
