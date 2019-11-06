import React from "react";
import { createUseStyles } from "react-jss";
import Components from "./components";
import theme from "../styles/theme";
import { Blok } from "../model/storyblok";

type Props = {
  body: Blok[];
};

const useStyles = createUseStyles({
  page: {
    padding: theme.spacing(4)
  }
});

export default function Page(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      {props.body &&
        props.body.map(blok =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok
          })
        )}
    </div>
  );
}
