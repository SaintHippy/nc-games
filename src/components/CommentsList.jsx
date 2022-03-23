import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
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
        console.dir(err);
      });
  }, [review_id]);

  return (
    <section className="comments">
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <SingleComment comment={comment} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CommentsList;
