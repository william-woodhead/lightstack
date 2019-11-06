/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type Props = {
  title?: string;
  description?: string;
  meta?: string;
  full_slug?: string;
  image?: string;
  authorName?: string;
  published_at?: string;
};

export default function Seo(props: Props) {
  const {
    title,
    description,
    full_slug,
    image,
    authorName,
    published_at
  } = props;

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;

  return (
    // @ts-ignore
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="referrer" content="origin" />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:url" content={full_slug} />
      {image && <meta property="og:image" content={image} />}
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:src" content={image} />}
      <meta property="og:description" content={metaDescription} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:text:title" content={metaTitle} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Lightstack" />
      {authorName && <meta property="article:author" content={authorName} />}
      {authorName && (
        <meta property="article:publisher" content={"Lightstack"} />
      )}
      {published_at && (
        <meta property="article:published_time" content={published_at} />
      )}
    </Helmet>
  );
}
