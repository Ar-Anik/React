import { useParams } from "react-router-dom";

function Post() {
  const { postID } = useParams();

  return (
    <div>
      <h1>Post</h1>
      <p>Post id is {postID}</p>
    </div>
  );
}

export default Post;
