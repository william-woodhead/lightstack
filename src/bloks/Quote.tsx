import React from "react";
import { createUseStyles } from "react-jss";
import SbEditable, { SbEditableContent } from "storyblok-react";

type Props = {
  blok: SbEditableContent & {
    text: string;
    author?: string;
  };
};

const useStyles = createUseStyles({
  quote: {
    fontWeight: "bold",
    fontSize: "2rem",
    fontStyle: "italic"
  },
  quotationMark: {
    fontSize: "6rem"
  }
});

export default function Quote(props: Props) {
  const classes = useStyles();
  return (
    <SbEditable content={props.blok}>
      <div className={classes.quote}>
        <span className={classes.quotationMark}>"</span> {props.blok.text} -{" "}
        {props.blok.author}
      </div>
    </SbEditable>
  );
}
