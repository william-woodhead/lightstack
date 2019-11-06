import React, { useState, useEffect } from "react";
import cloneAndParseContent from "../utils/cloneAndParseContent";
import HomePage from "../stories/Home";
import { Story, HomeContent } from "../model/storyblok";
import { SiteMetadata } from "../model/site";

type Props = {
  pageContext: {
    siteMetadata: SiteMetadata;
    home: Story<HomeContent>;
  };
};

export default function Home(props: Props) {
  const [home, setHome] = useState();

  useEffect(() => {
    const home = cloneAndParseContent(props.pageContext.home);
    setHome(home);
  }, [props.pageContext]);

  if (!home) return null;

  return <HomePage story={home} />;
}
