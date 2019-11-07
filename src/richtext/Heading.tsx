import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../styles/theme";

type Props = {
  level: number;
  children: any;
};
const useStyles = createUseStyles({
  h1: {
    fontSize: "1.8em",
    marginTop: theme.spacing(8)
  },
  h2: {
    fontSize: "1.6em",
    marginTop: theme.spacing(6)
  },
  h3: {
    fontSize: "1.4em",
    marginTop: theme.spacing(4)
  },
  h4: {
    fontSize: "1.2em",
    marginTop: theme.spacing(3)
  },
  h5: {
    fontSize: "1.1em",
    marginTop: theme.spacing(2)
  },
  h6: {
    fontSize: "1em",
    marginTop: theme.spacing(2)
  }
});

export default function Heading(props: Props) {
  const classes = useStyles();
  switch (props.level) {
    case 1:
      return <h1 className={classes.h1}>{props.children}</h1>;
    case 2:
      return <h2 className={classes.h2}>{props.children}</h2>;
    case 3:
      return <h3 className={classes.h3}>{props.children}</h3>;
    case 4:
      return <h4 className={classes.h4}>{props.children}</h4>;
    case 5:
      return <h5 className={classes.h5}>{props.children}</h5>;
    case 6:
      return <h6 className={classes.h6}>{props.children}</h6>;
    default:
      throw new Error("Bad Heading Level");
  }
}
