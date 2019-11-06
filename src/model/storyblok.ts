export type Story<T extends Content> = {
  full_slug: string;
  published_at: string;
  name: string;
  content: T;
};

interface Content {
  body?: Blok[];
}

export type BlogPostContent = Content & {
  title: string;
  description: string;
  image: string;
  author: Story<AuthorContent>;
};

export type HomeContent = Content & {};

export type AuthorContent = Content & {
  name: string;
  image: string;
  jobTitle: string;
};

export type BlokComponent = "richText" | "imageCaption" | "quote";

export interface Blok {
  _uid: string;
  component: BlokComponent;
}

export type ImageWithCaption = Blok & {
  image: string;
  caption?: string;
};

export type Quote = Blok & {
  text: string;
  author?: string;
};

export type RichText = Blok & {
  text: {
    type: "doc";
    content: any[];
  };
};

export type RichTextComponent = string;
