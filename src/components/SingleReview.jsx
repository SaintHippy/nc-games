import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleReview, toggleVote } from "../utils/api";
import CommentsList from "../components/CommentsList";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [reviewVoted, setReviewVoted] = useState(false);
  const [votes, setVotes] = useState();

  const toggleUpvote = () => {
    if (!reviewVoted) {
      setReviewVoted(true);
      setVotes((currentVotes) => currentVotes + 1);
      toggleVote(review_id, 1).catch(() => {
        setReviewVoted(false);
        setVotes((currentVotes) => currentVotes - 1);
      });
    } else {
      setReviewVoted(false);
      setVotes((currentVotes) => currentVotes - 1);
      toggleVote(review_id, -1).catch(() => {
        setReviewVoted(true);
        setVotes((currentVotes) => currentVotes + 1);
      });
    }
  };

  useEffect(() => {
    getSingleReview(review_id).then((reviewFromServer) => {
      setReview(reviewFromServer);
    });
  }, [review_id, votes]);

  return (
    <div className="pageWholeBody">
      <h2>{review.topic}</h2>
      <div className="titleText">
        <h1>{review.title}</h1>
      </div>
      <div className="Box">
        <div className="textBody">
          <p>{review.review_body}</p>
          <p>Posted by:</p>
          <Link to={`/users/${review.owner}`}>
            <h3 className="listText">{review.owner}</h3>
          </Link>
          <br></br>
          <Link to={`/reviews/${review_id}/Comments`}>{review.comment_count} comments on this review</Link>
          <CommentsList />
          {/*<AddComment /> */}
          <h3 className="listText">{review.votes} users have confidence in this review</h3>
          <button onClick={toggleUpvote}>Click to upvote</button>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
