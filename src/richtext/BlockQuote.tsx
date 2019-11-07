import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../styles/theme";

type Props = {
  children: any;
};

const useStyles = createUseStyles({
  blockQuote: {
    display: "block",
    position: "relative",
    paddingLeft: theme.spacing(2),
    borderLeft: "4px solid #BBBBBB",
    color: "#444444",
    fontStyle: "italic",
    fontSize: "0.85em"
  }
});

export default function BlockQuote(props: Props) {
  const classes = useStyles();
  return (
    <blockquote className={classes.blockQuote}>{props.children}</blockquote>
  );
}
