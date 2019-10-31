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
    fontWeight: "bold"
  }
});

export default function RichText(props: Props) {
  const classes = useStyles();
  return (
    <SbEditable content={props.blok}>
      <div
        dangerouslySetInnerHTML={{
          __html: (Api.richTextResolver.render(
            props.blok.text
          ) as unknown) as string
        }}
      />
    </SbEditable>
  );
}
