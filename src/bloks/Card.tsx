import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "gatsby";
import transformStoryblokImage from "../utils/transformStoryblokImage";

type Props = {
  blok: {
    full_slug: string;
    content: {
      title: string;
      description: string;
      image: string;
    };
  };
};

const useStyles = createUseStyles({
  card: {
    padding: 16,
    boxShadow: "2px 2px 4px rgba(0,0,0,0.1)",
    borderRadius: 4
  },
  header: {
    textDecoration: "none"
  },
  subheader: {
    textDecoration: "none"
  }
});

export default function Card(props: Props) {
  const classes = useStyles();
  return (
    <Link to={props.blok.full_slug}>
      <div className={classes.card}>
        <h1 className={classes.header}>{props.blok.content.title}</h1>
        <h2 className={classes.subheader}>{props.blok.content.description}</h2>
        <img
          src={transformStoryblokImage(props.blok.content.image, "200x200")}
        />
      </div>
    </Link>
  );
}
