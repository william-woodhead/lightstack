import React, { useState, useEffect } from "react";
import cloneAndParseContent from "../utils/cloneAndParseContent";
import BlogPostPage from "../components/BlogPost";

type Props = {
  pageContext: any;
  data: any;
};

export default function BlogPost(props: Props) {
  const [blok, setBlok] = useState();

  useEffect(() => {
    const blok = cloneAndParseContent(props.pageContext.blok);
    setBlok(blok);
  }, [props.pageContext]);

  if (!blok) return null;
  return <BlogPostPage blok={blok} />;
}
