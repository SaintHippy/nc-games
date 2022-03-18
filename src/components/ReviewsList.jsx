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
        <h1 className="titleText">All Reviews</h1>
      </div>
      <div className="mainBody">
        <div className="wideBox">
          <ul className="textList">
            {reviews.map((element) => {
              return (
                <li key={element.review_id}>
                  <Link to={`/review/${element.review_id}`}>
                    {element.title} by {element.author}
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
