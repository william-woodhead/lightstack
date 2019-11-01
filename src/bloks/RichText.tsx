import React from "react";
import { createUseStyles } from "react-jss";
import SbEditable, { SbEditableContent } from "storyblok-react";
import Storyblok from "storyblok-js-client";

const Api = new Storyblok({});

type Props = {
  blok: SbEditableContent & {
    text: string;
  };
};

const useStyles = createUseStyles({
  richText: {
    fontSize: "1.8rem"
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
