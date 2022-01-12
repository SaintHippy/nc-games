import { useState, useEffect } from "react";
import { getSingleArticle } from "../utils/api";

const SingleArticle = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getSingleArticle().then((articleFromServer) => {
      setArticles(articleFromServer);
    });
  }, []);

  return <h1>{articles}</h1>;
};

export default SingleArticle;
