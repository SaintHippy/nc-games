import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviews } from "../utils/api";

const SingleCategory = () => {
  const { category } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(category).then((reviewsFromServer) => {
      setReviews(reviewsFromServer);
    });
  }, [category]);

  return (
    <div className="Box">
      <div className="titleBar">
        <h1 className="titleText">Reviews by Category</h1>
      </div>
      <div className="mainBody">
        <div className="wideBox">
          <h2 className="titleText">{category}</h2>
          <ul className="textList">
            {reviews.map((element) => {
              return (
                <li key={element.review_id}>
                  <Link to={`/reviews/${element.review_id}`}>
                    <h2 className="listText">
                      {element.title} by {element.owner}
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

export default SingleCategory;
