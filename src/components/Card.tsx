import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "gatsby";
import transformStoryblokImage from "../utils/transformStoryblokImage";
import Author from "../stories/Author";
import { Story, BlogPostContent } from "../model/storyblok";
import theme from "../styles/theme";

type Props = {
  story: Story<BlogPostContent>;
};

const useStyles = createUseStyles({
  link: {
    textDecoration: "none",
    color: "black"
  },
  card: {
    paddingTop: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    maxWidth: 300,
    boxShadow: "2px 2px 4px 2px rgba(0,0,0,0.2)",
    margin: theme.spacing(1)
  },
  texts: {
    height: 140,
    overflow: "hidden",
    marginBottom: theme.spacing(1)
  },
  header: {
    fontSize: "2.4rem",
    padding: `0 ${theme.spacing(1)}px`
  },
  subheader: {
    padding: `0 ${theme.spacing(1)}px`,
    color: theme.palette.common.black
  }
});

export default function Card(props: Props) {
  const classes = useStyles();

  const { story } = props;
  const { content } = story;
  return (
    <Link to={story.full_slug} className={classes.link}>
      <div className={classes.card}>
        <Author story={content.author} />
        <div className={classes.texts}>
          <h1 className={classes.header}>{content.title}</h1>
          <h2 className={classes.subheader}>{content.description}</h2>
        </div>
        <img src={transformStoryblokImage(content.image, "300x300")} />
      </div>
    </Link>
  );
}
