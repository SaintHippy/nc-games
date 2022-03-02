import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromServer) => {
      setArticles(articlesFromServer);
    });
  }, []);

  return (
    <div>
      <h1 className="titleText">All Articles</h1>
      <ul className="textList">
        {articles.map((element) => {
          return (
            <li key={element.article_id}>
              <Link to={`/article/${element.article_id}`}>
                {element.title} by {element.author}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;
