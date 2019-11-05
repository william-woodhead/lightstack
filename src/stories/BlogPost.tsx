import React from "react";
import { createUseStyles } from "react-jss";
import transformStoryblokImage from "../utils/transformStoryblokImage";
import Layout from "../components/Layout";
import Content from "../components/Content";
import Author from "./Author";
import Seo from "../components/Seo";
import Page from "../components/Body";

type Props = {
  story: {
    full_slug: string;
    published_at: string;
    name: string;
    content: {
      title: string;
      description: string;
      image: string;
      author: any;
      body: any[];
    };
  };
};

const useStyles = createUseStyles({
  image: {
    maxWidth: "100%"
  },
  header: {
    fontSize: "5rem",
    color: "#222222"
  },
  subheader: {
    fontSize: "3rem",
    color: "#444444"
  },
  content: {
    width: "100%",
    maxWidth: 700,
    padding: `0 16px`
  }
});

export default function BlogPost(props: Props) {
  const classes = useStyles();
  const { content } = props.story;
  return (
    <Layout>
      <Seo
        title={content.title}
        description={content.description}
        full_slug={props.story.full_slug}
        published_at={props.story.published_at}
        authorName={content.author.name}
      />
      <Content>
        <Author story={content.author} />
        <h1 className={classes.header}>{content.title}</h1>
        <h2 className={classes.subheader}>{content.description}</h2>
      </Content>
      <img
        src={transformStoryblokImage(
          content.image,
          "1500x400/filters:focal(0x400:0x400)"
        )}
        className={classes.image}
      />
      <Content>
        <Page body={content.body} />
      </Content>
    </Layout>
  );
}
