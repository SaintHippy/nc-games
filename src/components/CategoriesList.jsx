import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";
// import "../styles/App.css";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromServer) => {
      setCategories(categoriesFromServer);
    });
  }, []);

  return (
    <div className="">
      <div className="titleBar">
        <h1 className="titleText">Categories</h1>
      </div>
      <div className="mainBody">
        <div className="wideBox">
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
      </div>
    </div>
  );
};

export default CategoriesList;
