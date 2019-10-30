import React from "react";
import { createUseStyles } from "react-jss";
import { SbEditableContent } from "storyblok-react";
import transformStoryblokImage from "../utils/transformStoryblokImage";
import Layout from "./Layout";
import SEO from "../components/seo";
import Page from "./Page";

type Props = {
  blok: SbEditableContent & {
    full_slug: string;
    content: {
      title: string;
      description: string;
      image: string;
    };
  };
};

const useStyles = createUseStyles({
  image: {
    maxWidth: "100%"
  }
});

export default function BlogPost(props: Props) {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Blog Post" />
      <h1>{props.blok.title}</h1>
      <h3>{props.blok.description}</h3>
      <img
        src={transformStoryblokImage(
          props.blok.content.image,
          "1500x400/filters:focal(0x400:0x400)"
        )}
        className={classes.image}
      />
      <Page blok={props.blok} />
    </Layout>
  );
}
