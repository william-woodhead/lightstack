import React from "react";
import { createUseStyles } from "react-jss";
import Card from "../components/Card";
import { Story, BlogPostContent } from "../model/storyblok";
import cloneAndParseContent from "../utils/cloneAndParseContent";

type Props = {
  cards: ({ node: Story<BlogPostContent> })[];
};

const useStyles = createUseStyles({
  cards: {
    display: "flex",
    flexDirection: "column"
  }
});

export default function Cards(props: Props) {
  const classes = useStyles();
  const { cards } = props;
  return (
    <div className={classes.cards}>
      {cards &&
        cards.map(({ node }) => {
          const blogPost = cloneAndParseContent(node);
          return <Card key={blogPost.full_slug} story={blogPost} />;
        })}
    </div>
  );
}
