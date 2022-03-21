import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleReview } from "../utils/api";
// import "../styles/App.css";

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
        <div className="textBody">
          <p>{review.review_body}</p>
          <p>Posted by:</p>
          <Link to={`/users/${review.owner}`}>{review.owner}</Link>
          <br></br>
          <Link to={`/reviews/${review_id}/Comments`}>{review.comment_count} comments on this review</Link>
          {/*<AddComment /> */}
          <p>{review.votes} users have confidence in this review</p>
          <p>Click to upvote</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
