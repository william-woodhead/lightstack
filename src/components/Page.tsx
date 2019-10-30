import React from "react";
import { createUseStyles } from "react-jss";
import { SbEditableContent } from "storyblok-react";
import Components from "./components.js";

type Props = {
  blok: SbEditableContent;
};

const useStyles = createUseStyles({
  page: {
    padding: 24
  }
});

export default function Page(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      {props.blok.body &&
        props.blok.body.map(blok =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok
          })
        )}
    </div>
  );
}
