import { arrayOf } from "prop-types";

import Post from "./Post";

function PostList({ list }) {
  return (
    <ul>
      {list.map((post) => (
        <li key={post.id}>
          <Post data={post} />
        </li>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  list: arrayOf(Post.propTypes.data).isRequired,
};

export default PostList;
