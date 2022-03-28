import { useState, useEffect, useContext } from "react";
import { getSingleReview, toggleVote } from "../utils/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import CommentsList from "../components/CommentsList";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [reviewVotes, setReviewVotes] = useState(0);
  const [reviewVoted, setReviewVoted] = useState(false);

  const { user } = useContext(UserContext);

  const toggleUpVote = () => {
    if (!reviewVoted) {
      setReviewVoted(true);
      setReviewVotes((currentVotes) => currentVotes + 1);
      toggleVote(review_id, 1).catch(() => {
        setReviewVoted(false);
        setReviewVotes((currentVotes) => currentVotes - 1);
      });
    } else {
      setReviewVoted(false);
      setReviewVotes((currentVotes) => currentVotes - 1);
      toggleVote(review_id, -1).catch(() => {
        setReviewVoted(true);
        setReviewVotes((currentVotes) => currentVotes + 1);
      });
    }
  };

  useEffect(() => {
    getSingleReview(review_id).then((reviewFromServer) => {
      setReview(reviewFromServer);
      setReviewVotes(reviewFromServer.votes);
    });
  }, [review_id]);

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
          <h3 className="listText">{review.owner}</h3>
          <p>{review.comment_count} comments on this review</p>
          <CommentsList />
          <h3 className="listText">{reviewVotes} users have confidence in this review</h3>
          <button onClick={toggleUpVote}>{reviewVoted ? "unvote" : "upvote"}</button>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
