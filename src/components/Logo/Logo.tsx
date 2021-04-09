import React, { ReactElement } from "react";

import "./styles/logo.scss";

interface LogoProps {
  contrast?: boolean;
}

const Logo = ({ contrast = false }: LogoProps): ReactElement => {
  return (
    <div className="logo__wrap">
      <img
        className="logo__img"
        src="/images/avatar.png"
        height="40"
        alt="avatar"
      />
      <h1
        className={`${
          contrast ? "logo__title-contrast" : "logo__title-primary"
        } logo__title`}
      >
        VIANCH
        <span
          className={`${
            contrast ? "logo__light-contrast" : "logo__light-primary"
          } logo__light`}
        >
          .com
        </span>
      </h1>
    </div>
  );
};

export default Logo;
