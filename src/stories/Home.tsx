import React from "react";
import { createUseStyles } from "react-jss";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import Content from "../components/Content";
import Body from "../components/Body";
import Cards from "../components/Cards";
import { Story, HomeContent } from "../model/storyblok";

type Props = {
  story: Story<HomeContent>;
};

export default function Home(props: Props) {
  const data = useStaticQuery(
    graphql`
      query {
        allStoryblokEntry(filter: { field_component: { eq: "blogPost" } }) {
          edges {
            node {
              full_slug
              name
              published_at
              content
            }
          }
        }
      }
    `
  );
  const blogPosts = data.allStoryblokEntry.edges;
  return (
    <Layout>
      <Seo full_slug={props.story.full_slug} />
      <Hero />
      <Content>
        <Body body={props.story.content.body} />
      </Content>
      <Cards cards={blogPosts} />
    </Layout>
  );
}
