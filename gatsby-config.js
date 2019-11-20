require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Lightstack`,
    description: `The Lightstack blog`,
    author: `William Woodhead`,
    origin: `https://www.lightstack.co.uk`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lightstack`,
        short_name: `Lightstack`,
        start_url: `/`,
        icon: `src/images/favicon.png`
      }
    },
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
        homeSlug: "/",
        resolveRelations: ["blogPost.author"],
        version: process.env.NODE_ENV === "production" ? "published" : "draft"
      }
    }
  ]
};
