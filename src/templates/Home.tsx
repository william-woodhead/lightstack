import React, { useState, useEffect } from "react";
import HomePage from "../components/Home";

type Props = {
  pageContext: any;
};

export default function Home(props: Props) {
  const [story, setStory] = useState();

  useEffect(() => {
    const story = Object.assign({}, props.pageContext.story);
    story.content = JSON.parse(story.content);
    setStory(story);
  }, [props.pageContext]);

  if (!story) return null;
  return <HomePage blok={story.content} />;
}
