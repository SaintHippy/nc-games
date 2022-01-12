import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";
import SingleArticle from "./SingleArticle";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromServer) => {
      setArticles(articlesFromServer);
    });
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((element) => {
          return (
            <li key={element.title}>
              <Link to={`${SingleArticle}`} />
              <p>{element.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;
