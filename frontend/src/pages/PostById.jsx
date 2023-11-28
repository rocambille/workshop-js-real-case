import { useLoaderData } from "react-router-dom";

import PostDetails from "../components/PostDetails";

function Posts() {
  const post = useLoaderData();

  return <PostDetails data={post} />;
}

export default Posts;
