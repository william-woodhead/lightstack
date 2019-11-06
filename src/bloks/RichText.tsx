import React from "react";
import { createUseStyles } from "react-jss";
import SbEditable, { SbEditableContent } from "storyblok-react";
import Storyblok from "storyblok-js-client";
import { RichText as RichTextType } from "../model/storyblok";
import Body from "../components/Body";
import Heading from "../richtext/Heading";
import Marks from "../richtext/Marks";
import theme from "../styles/theme";

const Api = new Storyblok({});

function renderRichTextBlok(blok) {
  switch (blok.type) {
    case "doc":
      return (
        blok.content && blok.content.map(subBlok => renderRichTextBlok(subBlok))
      );
    case "paragraph":
      return (
        <p>
          <Marks marks={blok.marks}>
            {blok.content &&
              blok.content.map(subBlok => renderRichTextBlok(subBlok))}
          </Marks>
        </p>
      );
    case "blockquote":
      return (
        <blockquote>
          <Marks marks={blok.marks}>
            {blok.content &&
              blok.content.map(subBlok => renderRichTextBlok(subBlok))}
          </Marks>
        </blockquote>
      );
    case "horizontal_rule":
      return (
        <Marks marks={blok.marks}>
          <hr />
        </Marks>
      );
    case "heading":
      return (
        <Heading level={blok.attrs.level}>
          <Marks marks={blok.marks}>
            {blok.content &&
              blok.content.map(subBlok => renderRichTextBlok(subBlok))}
          </Marks>
        </Heading>
      );
    case "code_block":
      return (
        <code>
          <Marks marks={blok.marks}>
            {blok.content &&
              blok.content.map(subBlok => renderRichTextBlok(subBlok))}
          </Marks>
        </code>
      );
    case "text":
      return (
        <span>
          <Marks marks={blok.marks}>{blok.text}</Marks>
        </span>
      );
    case "image":
      return <img src={blok.attrs.src} alt={blok.attrs.alt} />;
    case "hard_break":
      return <br />;
    case "ordered_list":
      return (
        <ol>
          <Marks marks={blok.marks}>
            {blok.content &&
              blok.content.map(subBlok => renderRichTextBlok(subBlok))}
          </Marks>
        </ol>
      );
    case "bullet_list":
      return (
        <ul>
          <Marks marks={blok.marks}>
            {blok.content &&
              blok.content.map(subBlok => renderRichTextBlok(subBlok))}
          </Marks>
        </ul>
      );
    case "list_item":
      return (
        <li>
          <Marks marks={blok.marks}>
            {blok.content &&
              blok.content.map(subBlok => renderRichTextBlok(subBlok))}
          </Marks>
        </li>
      );
    case "blok":
      return <Body body={blok.attrs.body} />;
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
