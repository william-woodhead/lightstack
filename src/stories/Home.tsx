import React from "react";
import { createUseStyles } from "react-jss";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import Content from "../components/Content";
import Page from "../components/Body";
import Card from "../components/Card";
import { Story, HomeContent } from "../model/storyblok";
import cloneAndParseContent from "../utils/cloneAndParseContent";

type Props = {
  story: Story<HomeContent>;
};

const useStyles = createUseStyles({
  cards: {
    display: "flex"
  }
});

export default function Home(props: Props) {
  const classes = useStyles();

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
        <Page body={props.story.content.body} />
      </Content>
      <div className={classes.cards}>
        {blogPosts &&
          blogPosts.map(({ node }) => {
            const blogPost = cloneAndParseContent(node);
            return <Card key={blogPost.full_slug} story={blogPost} />;
          })}
      </div>
    </Layout>
  );
}
