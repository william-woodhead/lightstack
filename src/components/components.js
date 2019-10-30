import Page from "./Page";
import Quote from "./Quote";
import RichText from "./RichText";
import ComponentNotFound from "./ComponentNotFound";
import BlogPost from "./BlogPost";

const ComponentList = {
  page: Page,
  blogPost: BlogPost,
  quote: Quote,
  richText: RichText
};

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export default Components;
