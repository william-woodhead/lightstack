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
  author: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  wideAuthor: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  image: {
    width: "100%",
    height: 180,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  wideImage: {
    display: "none",
    maxWidth: 300,
    width: 300,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  card: {
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(1),
    margin: theme.spacing(1),
    fontSize: "1rem",
    minHeight: 300,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      fontSize: "1.2rem"
    }
  },
  texts: {
    width: "100%",
    maxWidth: 600,
    marginLeft: theme.spacing(1)
  },
  header: {
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
        <Author className={classes.author} story={content.author} />
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${transformStoryblokImage(
              content.image,
              "500x300"
            )})`
          }}
        />
        <div
          className={classes.wideImage}
          style={{
            backgroundImage: `url(${transformStoryblokImage(
              content.image,
              "300x300"
            )})`
          }}
        />
        <div className={classes.texts}>
          <Author className={classes.wideAuthor} story={content.author} />
          <h1 className={classes.header}>{content.title}</h1>
          <h2 className={classes.subheader}>{content.description}</h2>
        </div>
      </div>
    </Link>
  );
}
