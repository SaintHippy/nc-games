import { useContext } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";
import { UserContext } from "../utils/UserContext";

const PostComment = () => {
  let { review_id } = useParams();
  review_id = Number(review_id);

  const { user } = useContext(UserContext);

  const submitComment = (event) => {
    const comment = event.target[0].value;
    postComment(user.username, comment, review_id)
      .then((returnedReview) => {
        console.log(returnedReview);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="commentForm">
      <form onSubmit={submitComment} action={`/reviews/${review_id}`}>
        What do you think?:
        <input id="comment" type="textarea" name="comment-body" />
        <br></br>
        <button>Add your comment</button>
      </form>
    </div>
  );
};

export default PostComment;
