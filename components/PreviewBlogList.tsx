"use client";

import BlogList from "./BlogList";
import { usePreview } from "../lib/sanity.preview";

type Props = {
  query: string;
};

export default function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query);
  //console.log("Cargando Publicaciones...", posts);
  return <BlogList posts={posts} />;
}
