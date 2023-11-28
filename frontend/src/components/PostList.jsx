import { Link } from "react-router-dom";
import { arrayOf } from "prop-types";

import Post from "./Post";

function PostList({ list }) {
  return (
    <ul>
      {list.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <Post data={post} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  list: arrayOf(Post.propTypes.data).isRequired,
};

export default PostList;
