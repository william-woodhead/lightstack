/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { createUseStyles } from "react-jss";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";

type Props = {
  children: any;
};

const useStyles = createUseStyles({
  layout: {}
});

export default function Layout(props: Props) {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={classes.layout}>
        <main>{props.children}</main>
        <footer>Footer text</footer>
      </div>
    </>
  );
}
