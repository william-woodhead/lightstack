import React from "react";
import { createUseStyles } from "react-jss";
import Components from "./components";
import theme from "../styles/theme";
import { Blok } from "../model/storyblok";

type Props = {
  body: Blok[];
};

const useStyles = createUseStyles({
  body: {
    width: "100%"
  }
});

export default function Body(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.body}>
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
