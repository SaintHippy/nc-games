import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";
import { UserContext } from "../utils/UserContext";

const PostComment = (comment) => {
  let { review_id } = useParams();

  const { user } = useContext(UserContext);

  const submitComment = (event) => {
    event.preventDefault();
    const comment = event.target[0].value;
    postComment(user.username, comment, review_id)
      .then((returnedReview) => {})
      .catch((err) => {
    
      });
  };
  const [newComment, setNewComment] = useState("");

  return (
    <div className="commentForm">
      <form onSubmit={submitComment}>
        <label>
          What do you think?:
          <input type="textarea" value={newComment} onChange={(event) => setNewComment(event.target.value)} />
        </label>
        <button type="submit">Add your own thoughts</button>
      </form>
    </div>
  );
};

export default PostComment;
