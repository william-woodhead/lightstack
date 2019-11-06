import React from "react";
import { createUseStyles } from "react-jss";
import SbEditable, { SbEditableContent } from "storyblok-react";
import Storyblok from "storyblok-js-client";
import { RichText as RichTextType } from "../model/storyblok";

const Api = new Storyblok({});

type Props = {
  blok: SbEditableContent & RichTextType;
};

const useStyles = createUseStyles({
  richText: {
    fontSize: "2rem"
  }
});

export default function RichText(props: Props) {
  const classes = useStyles();
  return (
    <SbEditable content={props.blok}>
      <div
        className={classes.richText}
        dangerouslySetInnerHTML={{
          __html: (Api.richTextResolver.render(
            props.blok.text
          ) as unknown) as string
        }}
      />
    </SbEditable>
  );
}
