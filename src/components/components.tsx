import Body from "./Body";
import Quote from "../bloks/Quote";
import RichText from "../bloks/RichText";
import ImageWithCaption from "../bloks/ImageWithCaption";
import ComponentNotFound from "./ComponentNotFound";
import BlogPost from "./BlogPost";
import Home from "./Home";

const ComponentList = {
  body: Body,
  blogPost: BlogPost,
  home: Home,
  quote: Quote,
  richText: RichText,
  imageWithCaption: ImageWithCaption
};

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export default Components;
