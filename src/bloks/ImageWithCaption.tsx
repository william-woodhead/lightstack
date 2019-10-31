import React from "react";
import { createUseStyles } from "react-jss";
import SbEditable, { SbEditableContent } from "storyblok-react";

type Props = {
  blok: SbEditableContent & {
    image: string;
    caption?: string;
  };
};

const useStyles = createUseStyles({
  image: {
    fontWeight: "bold"
  },
  caption: {}
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
