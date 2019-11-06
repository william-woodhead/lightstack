import React from "react";
import { createUseStyles } from "react-jss";
import SbEditable, { SbEditableContent } from "storyblok-react";
import { ImageWithCaption as ImageWithCaptionType } from "../model/storyblok";

type Props = {
  blok: SbEditableContent & ImageWithCaptionType;
};

const useStyles = createUseStyles({
  image: {
    fontWeight: "bold",
    maxWidth: "100%"
  },
  caption: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontStyle: "italic",
    fontSize: "1.4rem"
  }
});

export default function ImageWithCaption(props: Props) {
  const classes = useStyles();
  return (
    <SbEditable content={props.blok}>
      <img className={classes.image} src={props.blok.image} />
      <div className={classes.caption}>{props.blok.caption}</div>
    </SbEditable>
  );
}
