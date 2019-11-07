import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../styles/theme";

type Props = {
  children: any;
};

const useStyles = createUseStyles({
  codeBlock: {
    display: "block",
    position: "relative",
    background: "#f2f2f2",
    padding: theme.spacing(2),
    fontSize: "0.85em",
    whiteSpace: "pre-wrap",
    margin: `${theme.spacing(6)}px 0`
  }
});

export default function CodeBlock(props: Props) {
  const classes = useStyles();
  return <code className={classes.codeBlock}>{props.children}</code>;
}
