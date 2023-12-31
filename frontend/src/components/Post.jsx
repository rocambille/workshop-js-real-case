import { shape, string } from "prop-types";

function Post({ data }) {
  return (
    <article>
      <h2>{data.title}</h2>
    </article>
  );
}

Post.propTypes = {
  data: shape({
    title: string.isRequired,
  }).isRequired,
};

export default Post;
