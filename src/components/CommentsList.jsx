import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getComments } from "../utils/api";

import { deleteComment } from "../utils/api";
import PostComment from "./postComment";

const CommentsList = () => {
  const { review_id, comment_id } = useParams();
  const [comments, setComments] = useState([]);

  const handleDeleteComment = (event) => {
    deleteComment(event.target.name);
  };

  useEffect(() => {
    getComments(review_id).then((commentsFromServer) => {
      setComments(commentsFromServer);
    });
  }, [review_id]);

  return (
    <div className="Box">
      <div className="textBody">
        <h3>comments</h3>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <p>{comment.body}</p>
                <p>Posted by:</p>
                <Link to={`/users/${comment.author}`}>{comment.author}</Link>
                <p></p>
                <button name={comment.comment_id} onClick={handleDeleteComment}>
                  DELET THIS
                </button>
              </li>
            );
          })}
        </ul>
        <PostComment />
      </div>
    </div>
  );
};

export default CommentsList;
