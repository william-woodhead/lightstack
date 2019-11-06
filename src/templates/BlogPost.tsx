import React, { useState, useEffect } from "react";
import cloneAndParseContent from "../utils/cloneAndParseContent";
import BlogPostPage from "../stories/BlogPost";
import { Story, BlogPostContent } from "../model/storyblok";

type Props = {
  pageContext: {
    blogPost: Story<BlogPostContent>;
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
