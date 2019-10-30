import React from "react";
import { Link } from "gatsby";

type Props = {
  card: {
    name: string;
    full_slug: string;
  };
};

export default function Card(props: Props) {
  return <Link to={props.card.full_slug}>{props.card.name}</Link>;
}
