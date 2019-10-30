import React from "react";
import { SbEditableContent } from "storyblok-react";
import Layout from "./Layout";
import SEO from "../components/seo";
import Page from "./Page";

type Props = {
  blok: {
    content: SbEditableContent;
  };
};

export default function BlogPost(props: Props) {
  return (
    <Layout>
      <SEO title="Blog Post" />
      <Page blok={props.blok.content} />
    </Layout>
  );
}
