import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { Link, useParams } from "react-router-dom";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState("comment_count");
  const { category } = useParams;

  useEffect(() => {
    getReviews(category, sortBy).then((reviewsFromServer) => {
      setReviews(reviewsFromServer);
    });
  }, [category, sortBy]);

  const changeSortBy = (event) => {
    event.preventDefault();
    setSortBy(event.target.value);
  };
  return (
    <div className="Box">
      <div className="titleBar">
        <h1 className="titleText">Reviews</h1>
      </div>
      <div className="mainBody">
        <div className="wideBox">
          <ul>
            <div className="sort">
              <label className="titleText" htmlFor="sort_by">
                SORT REVIEWS BY:{" "}
              </label>
              <select name="sort_by" onChange={changeSortBy}>
                <option value="reviews.created_at">Date</option>
                <option value="comment_count">Comments</option>
                <option value="reviews.votes">Likes</option>
              </select>
            </div>
            {reviews.map((review) => {
              // const newFormattedDate = $.datepicker.formatDate("mm/dd/yy", new Date(Date({review.created_at})));
              return (
                <li key={review.review_id}>
                  <Link to={`/reviews/${review.review_id}`} style={{ textDecoration: "none" }}>
                    <h2 className="listText">
                      {review.title} by {review.owner}
                      {/* <br></br>on {newFormattedDate} */}
                      <br></br>
                      {review.comment_count} comments & {review.votes} confidence
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
