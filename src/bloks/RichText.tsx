import React from "react";
import { createUseStyles } from "react-jss";
import SbEditable, { SbEditableContent } from "storyblok-react";
import Storyblok from "storyblok-js-client";
import { Blok, RichText as RichTextType } from "../model/storyblok";
import theme from "../styles/theme";

const Api = new Storyblok({});

function renderRichTextBlok(blok, depth = 0) {
  switch (blok.type) {
    case "doc":
      return blok.content.map(subBlok => renderRichTextBlok(subBlok));
    case "paragraph":
      return <p>{blok.content.map(subBlok => renderRichTextBlok(subBlok))}</p>;
    case "text":
      return <span>{blok.text}</span>;
    case "ordered_list":
      return (
        <ol>{blok.content.map(subBlok => renderRichTextBlok(subBlok))}</ol>
      );
    case "unordered_list":
      return (
        <ul>{blok.content.map(subBlok => renderRichTextBlok(subBlok))}</ul>
      );
    case "list_item":
      return (
        <li>{blok.content.map(subBlok => renderRichTextBlok(subBlok))}</li>
      );
    case "heading":
      return (
        <h1>
          {blok.content &&
            blok.content.map(subBlok => renderRichTextBlok(subBlok))}
        </h1>
      );
    case "code_block":
      return (
        <code>{blok.content.map(subBlok => renderRichTextBlok(subBlok))}</code>
      );
  }
}

type Props = {
  blok: SbEditableContent & RichTextType;
};

const useStyles = createUseStyles({
  richText: {
    fontSize: "2rem",
    color: theme.palette.textColor
  }
});

export default function RichText(props: Props) {
  const classes = useStyles();
  console.log(props.blok.text);
  return (
    <SbEditable content={props.blok}>
      <div className={classes.richText}>
        {renderRichTextBlok(props.blok.text)}
      </div>
    </SbEditable>
  );
}
