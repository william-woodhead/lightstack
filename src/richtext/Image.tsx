import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../styles/theme";

type Props = {
  src: string;
  alt?: string;
};

const useStyles = createUseStyles({
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  image: {
    maxWidth: "100%"
  }
});

export default function Image(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src={props.src} alt={props.alt} />
    </div>
  );
}
