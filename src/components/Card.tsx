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
    color: theme.palette.textColor
  },
  image: {
    maxWidth: 300,
    width: "50%"
  },
  card: {
    display: "flex",
    paddingTop: theme.spacing(1),
    margin: theme.spacing(1)
  },
  texts: {
    maxWidth: 600,
    marginLeft: theme.spacing(1)
  },
  header: {
    fontSize: "2.4rem",
    padding: `0 ${theme.spacing(1)}px`
  },
  subheader: {
    padding: `0 ${theme.spacing(1)}px`,
    color: theme.palette.textColor,
    fontWeight: "normal"
  }
});

export default function Card(props: Props) {
  const classes = useStyles();

  const { story } = props;
  const { content } = story;
  return (
    <Link to={story.full_slug} className={classes.link}>
      <div className={classes.card}>
        <img
          className={classes.image}
          src={transformStoryblokImage(content.image, "300x300")}
        />
        <div className={classes.texts}>
          <Author story={content.author} />
          <h1 className={classes.header}>{content.title}</h1>
          <h2 className={classes.subheader}>{content.description}</h2>
        </div>
      </div>
    </Link>
  );
}
