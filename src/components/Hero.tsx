import React from "react";
import { createUseStyles } from "react-jss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import theme from "../styles/theme";

const useStyles = createUseStyles({
  hero: {
    position: "relative",
    width: "100%",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  title: {
    position: "absolute",
    top: 0,
    fontSize: "2em",
    width: "100%",
    paddingTop: "8%",
    textAlign: "center",
    color: theme.palette.common.white,
    textShadow: "1px 1px 1px rgba(0,0,0,.1)"
  }
});

export default function Hero() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero-sand.jpg" }) {
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
        loading="lazy"
        className={classes.image}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
      <h1 className={classes.title}>Notes on software projects</h1>
    </div>
  );
}
