import { Link } from "gatsby";
import { createUseStyles } from "react-jss";
import React from "react";

type Props = {
  siteTitle: string;
};

const useStyles = createUseStyles({
  header: {
    height: 60,
    width: "100%",
    fontSize: "2.8rem"
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
