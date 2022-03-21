import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviews } from "../utils/api";
// import "../styles/App.css";

const SingleCategory = () => {
  const { category } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(category).then((reviewsFromServer) => {
      setReviews(reviewsFromServer);
    });
  }, [category]);

  console.log(reviews);

  return (
    <div>
      <h1>Reviews by Category</h1>
      <h2>{category}</h2>
      <ul>
        {reviews.map((element) => {
          // if (element.category === category_slug) {
          return (
            <li key={element.review_id}>
              <Link to={`/reviews/${element.review_id}`}>
                {element.title} by {element.author}
              </Link>
            </li>
          );
          // }
        })}
      </ul>
    </div>
  );
};

export default SingleCategory;
