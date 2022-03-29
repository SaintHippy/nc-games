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
    <div className="Box">
      <div className="titleBar">
        <h1 className="titleText">Categories</h1>
      </div>
      <div className="mainBody">
        <div className="wideBox">
          <ul className="textList">
            {categories.map((category) => {
              return (
                <li key={category.slug}>
                  <Link to={`/categories/${category.slug}`} style={{ textDecoration: "none" }}>
                    <h2 className="listText">{category.slug}</h2>
                    <h3 className="listText">{category.description}</h3>
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
