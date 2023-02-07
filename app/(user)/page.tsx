import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { groq } from "next-sanity";
import { previewData } from "next/headers";
import PreviewSuspense from "../../components/PreviewSuspense";
import BlogList from "../../components/BlogList";
import PreviewBlogList from "../../components/PreviewBlogList";
import { client } from "../../lib/sanity.client";
disableReactDevTools();

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
export const revalidate = 30;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#002399]">
              Cargando la data Preview...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  return (
    //<div>No Preview</div>
    <BlogList posts={posts} />
  );
}
