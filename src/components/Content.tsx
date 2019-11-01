import React from "react";
import { createUseStyles } from "react-jss";

type Props = {
  children: any;
};

const useStyles = createUseStyles({
  content: {
    width: "100%",
    maxWidth: 700,
    padding: `0 16px`
  }
});

export default function Content(props: Props) {
  const classes = useStyles();
  return <div className={classes.content}>{props.children}</div>;
}
