import React from "react";

type Mark = {
  type: string;
  attrs?: any;
};

type Props = {
  marks?: Mark[];
  children?: any;
};

function marksHasType(marks, type) {
  return marks.reduce((result, mark) => {
    if (result) return result;
    if (mark.type === type) return true;
    return result;
  }, false);
}

export default function Marks(props: Props) {
  const { marks, children } = props;
  if (!marks || !marks.length) {
    if (!children) return null;
    return children;
  }

  let result = children;
  if (marksHasType(marks, "bold")) {
    result = <b>{result}</b>;
  }
  if (marksHasType(marks, "italic")) {
    result = <em>{result}</em>;
  }
  if (marksHasType(marks, "strike")) {
    result = <del>{result}</del>;
  }
  if (marksHasType(marks, "underline")) {
    result = <u>{result}</u>;
  }
  if (marksHasType(marks, "link")) {
    const link = marks.find(({ type }) => type === "link");
    result = (
      <a href={link.attrs.href} target={link.attrs.target}>
        {result}
      </a>
    );
  }
  return result;
}
