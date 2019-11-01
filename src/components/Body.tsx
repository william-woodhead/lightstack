import React from "react";
import { createUseStyles } from "react-jss";
import Components from "./components";

type Props = {
  body: any[];
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
