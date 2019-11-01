import React, { useState, useEffect } from "react";
import cloneAndParseContent from "../utils/cloneAndParseContent";
import HomePage from "../components/Home";

type Props = {
  pageContext: {
    home: any;
    blogPosts: any;
  };
};

export default function Home(props: Props) {
  const [home, setHome] = useState();

  useEffect(() => {
    const home = cloneAndParseContent(props.pageContext.home);
    setHome(home);
  }, [props.pageContext]);

  if (!home) return null;

  return (
    <HomePage
      story={home}
      blogPosts={props.pageContext.blogPosts.map(post =>
        cloneAndParseContent(post)
      )}
    />
  );
}
