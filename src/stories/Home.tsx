import React from "react";
import { createUseStyles } from "react-jss";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import Content from "../components/Content";
import Page from "../components/Body";
import Card from "../bloks/Card";

type Props = {
  story: {
    content: {
      body: any[];
    };
  };
  blogPosts?: any;
};

const useStyles = createUseStyles({
  cards: {
    display: "flex"
  }
});

export default function Home(props: Props) {
  const classes = useStyles();
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Content>
        <Page body={props.story.content.body} />
      </Content>
      <div className={classes.cards}>
        {props.blogPosts &&
          props.blogPosts.map(blogPost => {
            return <Card key={blogPost.full_slug} blok={blogPost} />;
          })}
      </div>
    </Layout>
  );
}
