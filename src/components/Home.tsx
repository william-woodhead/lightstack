import React from "react";
import Layout from "./Layout";
import Hero from "../components/Hero";
import SEO from "../components/seo";
import Card from "../bloks/Card";
import Page from "./Page";

type Props = {
  content: any;
  blogPosts: any;
};

export default function Home(props: Props) {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Page content={props.content} />
      {props.blogPosts.map(blogPost => {
        return <Card key={blogPost.full_slug} blok={blogPost} />;
      })}
    </Layout>
  );
}
