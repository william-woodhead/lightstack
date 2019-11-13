import React from "react";
import { createUseStyles } from "react-jss";
import { useStaticQuery, graphql } from "gatsby";
import transformStoryblokImage from "../utils/transformStoryblokImage";
import Layout from "../components/Layout";
import Content from "../components/Content";
import Author from "./Author";
import Seo from "../components/Seo";
import Body from "../components/Body";
import Cards from "../components/Cards";
import { Story, BlogPostContent } from "../model/storyblok";
import theme from "../styles/theme";

type Props = {
  story: Story<BlogPostContent>;
};

const useStyles = createUseStyles({
  image: {
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  wideImage: {
    display: "none",
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  header: {
    color: theme.palette.textColor
  },
  subheader: {
    color: theme.palette.textColor,
    fontWeight: "normal",
    marginBottom: theme.spacing(4)
  },
  content: {
    width: "100%",
    maxWidth: 700,
    padding: `0 ${theme.spacing(2)}px`
  },
  author: {
    marginTop: theme.spacing(4)
  }
});

export default function BlogPost(props: Props) {
  const classes = useStyles();
  const { content, id } = props.story;
  const data = useStaticQuery(
    graphql`
      query {
        allStoryblokEntry(
          filter: { field_component: { eq: "blogPost" } }
          limit: 3
          sort: { fields: first_published_at }
        ) {
          edges {
            node {
              id
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
  // remove the current post from the blog list
  const blogPosts = data.allStoryblokEntry.edges.filter(
    ({ node }) => node.id !== id
  );
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
        <Author className={classes.author} story={content.author} />
        <h1 className={classes.header}>{content.title}</h1>
        <h3 className={classes.subheader}>{content.description}</h3>
      </Content>
      <img
        src={transformStoryblokImage(content.image, "500x300")}
        className={classes.image}
      />
      <img
        src={transformStoryblokImage(
          content.image,
          "1500x400/filters:focal(0x400:0x400)"
        )}
        className={classes.wideImage}
      />
      <Content>
        <Body body={content.body} />
      </Content>
      <hr />
      <h2>Other Posts</h2>
      <Cards cards={blogPosts} />
    </Layout>
  );
}
