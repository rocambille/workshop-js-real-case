import { useLoaderData } from "react-router-dom";

import PostList from "../components/PostList";

function Posts() {
  const posts = useLoaderData();

  return (
    <>
      <h1>Articles</h1>
      <PostList list={posts} />
    </>
  );
}

export default Posts;
