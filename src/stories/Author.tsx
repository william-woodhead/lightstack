import React from "react";
import { createUseStyles } from "react-jss";
import transformStoryblokImage from "../utils/transformStoryblokImage";

type Props = {
  story: {
    content: {
      name: string;
      image: string;
      jobTitle: string;
    };
  };
};

const useStyles = createUseStyles({
  author: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.2rem"
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: "50%",
    marginRight: 8
  },
  name: {},
  jobTitle: {}
});

export default function Author(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.author}>
      <img
        src={transformStoryblokImage(props.story.content.image, "60x60")}
        className={classes.image}
      />
      <div>
        <div className={classes.name}>{props.story.content.name}</div>
        <div className={classes.jobTitle}>{props.story.content.jobTitle}</div>
      </div>
    </div>
  );
}
