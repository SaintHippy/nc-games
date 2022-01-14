import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import { ToggleUpDoot, ToggleDownDoot } from "../utils/doots";
import { deleteComment } from "../utils/api";

const CommentsList = () => {
  const { article_id, comment_id } = useParams();
  const [comments, setComments] = useState([]);

  console.log("in Comments list");

  useEffect(() => {
    getComments(article_id).then((commentsFromServer) => {
      setComments(commentsFromServer);
    });
  }, [article_id]);

  console.log(comments);

  return (
    <div>
      <h3>comments</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>Posted by:</p>
              <Link to="/users/:username">{comment.author}</Link>
              <button onClick={deleteComment(comment_id)}>DELET THIS</button>

              <p>users have {comment.votes} confidence in this comment</p>
              <button onClick={ToggleUpDoot}>vote {comment.author} up</button>
              <button onClick={ToggleDownDoot}>vote {comment.author} Down</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsList;
