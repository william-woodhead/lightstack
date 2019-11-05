import { Link } from "gatsby";
import { createUseStyles } from "react-jss";
import React from "react";

type Props = {
  siteTitle: string;
};

const useStyles = createUseStyles({
  header: {
    display: "flex",
    alignItems: "center",
    height: 60,
    width: "100%",
    fontSize: "2.8rem",
    position: "sticky",
    top: 0,
    background: "#FFFFFF",
    boxShadow: "2px 0px 2px 2px rgba(0,0,0,.1)"
  },
  logo: {
    marginLeft: 8
  },
  link: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
    letterSpacing: 6
  }
});

export default function Header(props: Props) {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div>
        <p className={classes.logo}>
          <Link to="/" className={classes.link}>
            {props.siteTitle}
          </Link>
        </p>
      </div>
    </header>
  );
}
