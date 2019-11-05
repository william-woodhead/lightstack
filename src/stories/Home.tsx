import React from "react";
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

export default function Home(props: Props) {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Content>
        <Page body={props.story.content.body} />
      </Content>
      {props.blogPosts &&
        props.blogPosts.map(blogPost => {
          return <Card key={blogPost.full_slug} blok={blogPost} />;
        })}
    </Layout>
  );
}
