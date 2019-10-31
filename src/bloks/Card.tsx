import React from "react";
import { Link } from "gatsby";
import transformStoryblokImage from "../utils/transformStoryblokImage";

type Props = {
  blok: {
    full_slug: string;
    content: {
      title: string;
      description: string;
      image: string;
    };
  };
};

export default function Card(props: Props) {
  return (
    <Link to={props.blok.full_slug}>
      <h1>{props.blok.content.title}</h1>
      <h3>{props.blok.content.description}</h3>
      <img src={transformStoryblokImage(props.blok.content.image, "200x200")} />
    </Link>
  );
}
