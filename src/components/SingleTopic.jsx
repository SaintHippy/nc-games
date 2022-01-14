import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../utils/api";

const SingleTopic = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(topic).then((ArticlesFromServer) => {
      setArticles(ArticlesFromServer);
    });
  }, [topic]);

  console.log(articles);

  return (
    <div>
      <h1>Articles by topic</h1>
      <h2>{topic}</h2>
      <ul>
        {articles.map((element) => {
          // if (element.topic === topic_slug) {
          return (
            <li key={element.article_id}>
              <Link to={`/article/${element.article_id}`}>
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

export default SingleTopic;
