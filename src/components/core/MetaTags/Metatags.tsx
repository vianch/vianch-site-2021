import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";

const MetaTags = (): ReactElement => {
  const title = "VIANCH.com";
  const description = `Full stack application Developer and photographer based in Bogotá Colombia. 
  Developer at TodayTix Group in New York and Zaga Colombia.`;
  const url = "http://vianch.com/";
  const image = "/images/avatar.png";

  return (
    <>
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

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5X6DTRX');`,
          }}
          type="text/javascript"
        />
      </Helmet>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5X6DTRX"
height="0" width="0" style="display:none;visibility:hidden"> </iframe>`,
        }}
      />
    </>
  );
};

export default MetaTags;
