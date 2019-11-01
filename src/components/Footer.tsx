import { createUseStyles } from "react-jss";
import React from "react";

type Props = {};

const useStyles = createUseStyles({
  footer: {
    minHeight: 600,
    width: "100%",
    fontSize: "2.8rem",
    background: "#F0F0F0"
  }
});

export default function Footer(_props: Props) {
  const classes = useStyles();
  return <footer className={classes.footer}>copyright Lighstack</footer>;
}
