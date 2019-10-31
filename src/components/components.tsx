import Page from "./Page";
import Quote from "../bloks/Quote";
import RichText from "../bloks/RichText";
import ImageWithCaption from "../bloks/ImageWithCaption";
import ComponentNotFound from "./ComponentNotFound";
import BlogPost from "./BlogPost";

const ComponentList = {
  page: Page,
  blogPost: BlogPost,
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
