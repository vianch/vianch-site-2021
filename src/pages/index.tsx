import React, { ReactElement } from "react";
import { Header, Banner, Repositories } from "../components";
// import { PageProps } from "gatsby";

import "../theme/main.scss";

const IndexRoute = (): ReactElement => {
  return (
    <>
      <Header />
      <Banner />
      <Repositories />
    </>
  );
};

export default IndexRoute;
