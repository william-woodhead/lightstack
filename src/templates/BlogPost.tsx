import React, { useState, useEffect } from "react";
import cloneAndParseContent from "../utils/cloneAndParseContent";
import BlogPostPage from "../components/BlogPost";

type Props = {
  pageContext: {
    blogPost: {
      full_slug: string;
      name: string;
      published_at: string;
      content: object;
    };
  };
};

export default function BlogPost(props: Props) {
  const [blogPost, setBlogPost] = useState();

  useEffect(() => {
    const blogPost = cloneAndParseContent(props.pageContext.blogPost);
    setBlogPost(blogPost);
  }, [props.pageContext]);

  if (!blogPost) return null;
  return <BlogPostPage story={blogPost} />;
}
