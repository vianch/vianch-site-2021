import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";

const MetaTags = (): ReactElement => {
  const title = "VIANCH.com";
  const description = `Full stack application Developer and photographer based in Bogotá Colombia. 
  Developer at TodayTix Group in New York and Zaga Colombia.`;
  const url = "http://vianch.com/";
  const image = "/images/avatar.png";

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>

      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default MetaTags;
