import React from "react";
import { Link } from "gatsby";
import { SbEditableContent } from "storyblok-react";
import Layout from "./Layout";
import Hero from "../components/Hero";
import SEO from "../components/seo";
import Page from "./Page";

type Props = {
  blok: SbEditableContent;
};

export default function Home(props: Props) {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Link to="/page-2/">Go to page 2</Link>
      <Page blok={props.blok} />
    </Layout>
  );
}
