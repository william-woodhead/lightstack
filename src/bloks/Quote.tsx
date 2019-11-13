import React from "react";
import { createUseStyles } from "react-jss";
import SbEditable, { SbEditableContent } from "storyblok-react";
import { Quote as QuoteType } from "../model/storyblok";
import theme from "../styles/theme";

type Props = {
  blok: SbEditableContent & QuoteType;
};

const useStyles = createUseStyles({
  quote: {
    position: "relative",
    fontWeight: "bold",
    fontSize: "1.2em",
    fontStyle: "italic",
    paddingLeft: theme.spacing(3),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    "&:before": {
      content: "'\"'",
      position: "absolute",
      top: -15,
      left: -5,
      fontSize: "3em"
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(6)
    }
  }
});

export default function Quote(props: Props) {
  const classes = useStyles();
  return (
    <SbEditable content={props.blok}>
      <div className={classes.quote}>
        {props.blok.text}
        {props.blok.author && ` - ${props.blok.author}`}
      </div>
    </SbEditable>
  );
}
