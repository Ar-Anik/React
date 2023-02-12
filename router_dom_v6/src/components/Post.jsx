import { useNavigate, useParams } from "react-router-dom";
import classes from "../styles/Header.module.css";

function Post() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const goBack1 = () => {
    navigate("/posts");
  };

  const goBack2 = () => {
    navigate("/posts", {
      replace: true,
    });
  };

  function goBack3() {
    navigate(-1);
  }

  return (
    <div className={classes.btn}>
      <h1>Post</h1>
      <p>Post id is {postId}</p>

      <button onClick={goBack1}>Go Back-1</button>

      <button onClick={goBack2}>Go Back-2</button>

      <button onClick={() => goBack3()}>Go Back-3</button>
    </div>
  );
}

export default Post;
