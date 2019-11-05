import React from "react";
import { createUseStyles } from "react-jss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const useStyles = createUseStyles({
  hero: {
    width: "100%",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: "3rem",
    position: "absolute",
    top: "50%",
    width: "100%",
    textAlign: "center"
  }
});

export default function Hero() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero-leaves.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className={classes.hero}>
      <Img
        className={classes.image}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
      <h1 className={classes.title}>Pragmatic thoughts on software projects</h1>
    </div>
  );
}
