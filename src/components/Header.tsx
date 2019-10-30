import { Link } from "gatsby";
import React from "react";

type Props = {
  siteTitle: string;
};

export default function Header(props: Props) {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">{props.siteTitle}</Link>
        </h1>
      </div>
    </header>
  );
}
