import React from "react";
import { createUseStyles } from "react-jss";
import transformStoryblokImage from "../utils/transformStoryblokImage";
import Layout from "./Layout";
import Content from "./Content";
import Seo from "./Seo";
import Page from "./Body";

type Props = {
  story: {
    full_slug: string;
    published_at: string;
    name: string;
    content: {
      title: string;
      description: string;
      image: string;
      body: any[];
    };
  };
};

const useStyles = createUseStyles({
  image: {
    maxWidth: "100%"
  },
  header: {
    fontSize: "5rem"
  },
  subheader: {
    fontSize: "3rem"
  },
  content: {
    width: "100%",
    maxWidth: 700,
    padding: `0 16px`
  }
});

export default function BlogPost(props: Props) {
  const classes = useStyles();
  return (
    <Layout>
      <Seo
        title={props.story.content.title}
        description={props.story.content.description}
        full_slug={props.story.full_slug}
        published_at={props.story.published_at}
      />
      <Content>
        <h1 className={classes.header}>{props.story.content.title}</h1>
        <h2 className={classes.subheader}>{props.story.content.description}</h2>
      </Content>
      <img
        src={transformStoryblokImage(
          props.story.content.image,
          "1500x400/filters:focal(0x400:0x400)"
        )}
        className={classes.image}
      />
      <Content>
        <Page body={props.story.content.body} />
      </Content>
    </Layout>
  );
}
