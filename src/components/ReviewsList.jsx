import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState("reviews.created_at");

  useEffect(() => {
    getReviews(sortBy).then((reviewsFromServer) => {
      setReviews(reviewsFromServer);
    });
  }, [sortBy]);

  const handleSortChange = (event) => {
    event.preventDefault();
    setSortBy(event.target.value);
  };
  return (
    <div className="">
      <div className="titleBar">
        <h1 className="titleText">Reviews</h1>
      </div>
      <div className="mainBody">
        <div className="wideBox">
          <ul>
            <div id="sort">
              <label className="titleText" htmlFor="sort_by">
                SORT BY:{" "}
              </label>
              <select name="sort_by" onChange={handleSortChange}>
                <option value="reviews.created_at">Date</option>
                <option value="comment_count">Comments</option>
                <option value="reviews.votes">Likes</option>
              </select>
            </div>
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
