import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleReview } from "../utils/api";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    getSingleReview(review_id).then((reviewFromServer) => {
      setReview(reviewFromServer);
    });
  }, [review_id]);

  return (
    <div class="pageWholeBody">
      <h2>{review.topic}</h2>
      <div class="titleText">
        <h1>{review.title}</h1>
      </div>
      <div class="Box">
        <p>{review.body}</p>
        <p>Posted by:</p>
        <Link to={`/users/${review.author}`}>{review.author}</Link>
        <br></br>
        <Link to={`/reviews/${review_id}/Comments`}>{review.comment_count} comments on this review</Link>
      </div>
      <p>users have {review.votes} confidence in this review</p>
      <p>Click to upvote</p>
    </div>
  );
};

export default SingleReview;
