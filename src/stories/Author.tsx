import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import transformStoryblokImage from "../utils/transformStoryblokImage";
import { Story, AuthorContent } from "../model/storyblok";
import theme from "../styles/theme";

type Props = {
  story: Story<AuthorContent>;
  className?: string;
};

const useStyles = createUseStyles({
  author: {
    display: "flex",
    alignItems: "center"
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: "50%",
    marginRight: theme.spacing(1)
  },
  name: {},
  jobTitle: {}
});

export default function Author(props: Props) {
  const classes = useStyles();
  return (
    <div className={classnames(classes.author, props.className)}>
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
