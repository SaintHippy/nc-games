import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromServer) => {
      setCategories(categoriesFromServer);
    });
  }, []);

  return (
    <div>
      <h1 className="titleText">Categories</h1>
      <ul className="textList">
        {categories.map((element) => {
          return (
            <li key={element.slug}>
              <Link to={`/reviews/${element.slug}`}>
                <h2>{element.slug}</h2>
                <p>{element.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesList;
