import { useState } from "react";
import { deleteComment, toggleVote } from "../utils/api";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const SingleComment = ({ comment, setCommentsLength, review_id }) => {
  const [commentVotes, setCommentVotes] = useState(comment.votes);
  const [commentVoted, setCommentVoted] = useState(false);

  const { user } = useContext(UserContext);

  const toggleUpVote = () => {
    if (!commentVoted) {
      setCommentVoted(true);
      setCommentVotes((currentVotes) => currentVotes + 1);
      toggleVote(comment.comment_id, 1).catch(() => {
        setCommentVoted(false);
        setCommentVotes((currentVotes) => currentVotes - 1);
      });
    } else {
      setCommentVoted(false);
      setCommentVotes((currentVotes) => currentVotes - 1);
      toggleVote(review_id, -1).catch(() => {
        setCommentVoted(true);
        setCommentVotes((currentVotes) => currentVotes + 1);
      });
    }
  };

  const removeComment = (event) => {
    deleteComment(event.target.name).then(() => {
      setCommentsLength((currComments) => currComments - 1);
    });
  };

  return (
    <div className="">
      <div className="textBody">
        <h3 id="comment">{comment.body}</h3>
        <p>Posted by: {comment.author}</p>

        <p>{commentVotes} users rate this.</p>
        {/* <button onClick={toggleUpVote}>{commentVoted ? "unvote" : "upvote"}</button> */}
        {user.username === comment.author ? (
          <button name={comment.comment_id} onClick={removeComment}>
            DELET THIS!
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SingleComment;
