import React from "react";
import { createUseStyles } from "react-jss";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import theme from "../styles/theme";

type Props = {
  children: any;
};

const useStyles = createUseStyles({
  layout: {
    fontSize: "1.2rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.8rem"
    }
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
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
        <main className={classes.main}>{props.children}</main>
      </div>
    </>
  );
}
