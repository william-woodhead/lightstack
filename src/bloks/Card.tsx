import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "gatsby";
import transformStoryblokImage from "../utils/transformStoryblokImage";
import Author from "../stories/Author";

type Props = {
  blok: {
    full_slug: string;
    content: {
      title: string;
      description: string;
      image: string;
      author: any;
    };
  };
};

const useStyles = createUseStyles({
  link: {
    textDecoration: "none",
    color: "black"
  },
  card: {
    paddingTop: 8,
    borderRadius: 4,
    boxShadow: "2px 2px 4px 2px rgba(0,0,0,0.2)"
  },
  header: {
    fontSize: "2.4rem",
    padding: `0 8px`
  },
  subheader: {
    padding: `0 8px`,
    color: "#434343"
  }
});

export default function Card(props: Props) {
  const classes = useStyles();
  return (
    <Link to={props.blok.full_slug} className={classes.link}>
      <div className={classes.card}>
        <Author story={props.blok.content.author} />
        <h1 className={classes.header}>{props.blok.content.title}</h1>
        <h2 className={classes.subheader}>{props.blok.content.description}</h2>
        <img
          src={transformStoryblokImage(props.blok.content.image, "300x300")}
        />
      </div>
    </Link>
  );
}
