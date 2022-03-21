import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewsFromServer) => {
      setReviews(reviewsFromServer);
    });
  }, []);

  return (
    <div className="">
      <div className="titleBar">
        <h1 className="titleText">Reviews</h1>
      </div>
      <div className="mainBody">
        <div className="wideBox">
          <ul>
            {reviews.map((review) => {
              return (
                <li key={review.review_id}>
                  <Link to={`/reviews/${review.review_id}`} style={{ textDecoration: "none" }}>
                    <h2 className="listText">
                      {review.title} by {review.owner}
                    </h2>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReviewsList;
