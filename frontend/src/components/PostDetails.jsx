import { shape, string } from "prop-types";

function Post({ data }) {
  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </article>
  );
}

Post.propTypes = {
  data: shape({
    title: string.isRequired,
    content: string.isRequired,
  }).isRequired,
};

export default Post;
