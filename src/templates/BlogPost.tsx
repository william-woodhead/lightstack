import React, { useState, useEffect } from "react";
import cloneAndParseContent from "../utils/cloneAndParseContent";
import BlogPostPage from "../components/BlogPost";

type Props = {
  pageContext: {
    blogPost: any;
  };
};

export default function BlogPost(props: Props) {
  const [blogPost, setBlogPost] = useState();

  useEffect(() => {
    const blogPost = cloneAndParseContent(props.pageContext.blogPost);
    setBlogPost(blogPost);
  }, [props.pageContext]);

  if (!blogPost) return null;
  return <BlogPostPage content={blogPost.content} />;
}
