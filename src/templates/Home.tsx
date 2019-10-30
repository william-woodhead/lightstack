import React, { useState, useEffect } from "react";
import cloneAndParseContent from "../utils/cloneAndParseContent";
import HomePage from "../components/Home";

type Props = {
  pageContext: {
    blok: any;
    blogPosts: any;
  };
};

export default function Home(props: Props) {
  const [blok, setBlok] = useState();

  useEffect(() => {
    const blok = cloneAndParseContent(props.pageContext.blok);
    setBlok(blok);
  }, [props.pageContext]);

  if (!blok) return null;

  return (
    <HomePage
      blok={blok}
      blogPosts={props.pageContext.blogPosts.map(post =>
        cloneAndParseContent(post)
      )}
    />
  );
}
