import React from "react";

type Props = {
  headComponents: any;
  body: any;
  postBodyComponents: any;
};

export default function HTML(props: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {props.headComponents}
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Serif:400,400i,700,700i&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
