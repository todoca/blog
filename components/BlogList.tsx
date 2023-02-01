import { Post } from "../typings";

type Props = {
  posts: Post[];
};
function BlogList({ posts }: Props) {
  console.log(posts.length);
  return <div>Prueba</div>;
}

export default BlogList;
