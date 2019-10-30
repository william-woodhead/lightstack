import React from "react";
import { SbEditableContent } from "storyblok-react";
import Layout from "./Layout";
import Hero from "../components/Hero";
import SEO from "../components/seo";
import Card from "../components/Card";
import Page from "./Page";

type Props = {
  blogPosts: any;
  blok: SbEditableContent;
};

export default function Home(props: Props) {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Page blok={props.blok} />
      {props.blogPosts.map(blogPost => {
        return <Card key={blogPost.full_slug} blok={blogPost} />;
      })}
    </Layout>
  );
}
