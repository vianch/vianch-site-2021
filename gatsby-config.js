module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-sass",
    },
    `gatsby-plugin-react-helmet`,
  ],
  siteMetadata: {
    title: "VIANCH.com",
    titleTemplate: "%s · Vianch.com",
    description:
      "Full stack application Developer and photographer based in Bogotá Colombia. " +
      "Developer at TodayTix Group in New York and Zaga Colombia.",
    url: "www.vianch.com",
    image: "/images/avatar.png",
    twitterUsername: "@vianch_tog",
  },
};
