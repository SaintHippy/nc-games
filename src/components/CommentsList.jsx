import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import PostComment from "./postComment";
import SingleComment from "./SingleComment";

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getComments(review_id)
      .then((returnedComments) => {
        setComments(returnedComments);
      })
      .catch((err) => {
     
      });
  }, [review_id]);

  return (
    <section className="comments">
      <div className="Box">
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <SingleComment comment={comment} />
              </li>
            );
          })}
          <PostComment />
        </ul>
      </div>
    </section>
  );
};

export default CommentsList;
