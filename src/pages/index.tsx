import React, { ReactElement } from "react";
import { Header } from "../components";
// import { PageProps } from "gatsby";

import "../theme/main.scss";

const IndexRoute = (): ReactElement => {
  return (
    <>
      <Header />
      <h1>Hello victor:</h1>
    </>
  );
};

export default IndexRoute;
