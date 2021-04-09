import React, { ReactElement } from "react";
import {
  Header,
  Banner,
  Repositories,
  Clients,
  Footer,
  MetaTags,
} from "../components";

import "../theme/main.scss";

const IndexRoute = (): ReactElement => {
  return (
    <>
      <MetaTags />
      <Header />
      <Banner />
      <Repositories />
      <Clients />
      <Footer />
    </>
  );
};

export default IndexRoute;
