import React, { ReactElement } from "react";
import { Header, Banner } from "../components";
// import { PageProps } from "gatsby";

import "../theme/main.scss";

const IndexRoute = (): ReactElement => {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
};

export default IndexRoute;
