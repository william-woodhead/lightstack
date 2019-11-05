module.exports = {
  siteMetadata: {
    title: `Lightstack`,
    description: `The Lightstack blog`,
    author: `William Woodhead`
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
        start_url: `/`
      }
    },
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "fKZN6q8tNIBZleMHCRe1kQtt",
        homeSlug: "/",
        resolveRelations: ["blogPost.author"],
        // version: process.env.NODE_ENV === "production" ? "published" : "draft"
        version: "draft"
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
