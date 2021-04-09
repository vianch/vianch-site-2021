import React, { ReactElement } from "react";
import { Header, Banner, Repositories, Clients, Footer } from "../components";

import "../theme/main.scss";

const IndexRoute = (): ReactElement => {
  return (
    <>
      <Header />
      <Banner />
      <Repositories />
      <Clients />
      <Footer />
    </>
  );
};

export default IndexRoute;
