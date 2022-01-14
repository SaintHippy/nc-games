import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/api";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getSingleArticle(article_id).then((articleFromServer) => {
      setArticle(articleFromServer);
    });
  }, [article_id]);

  return (
    <div>
      <h2>{article.topic}</h2>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <p>Posted by:</p>
      <Link to={`/users/${article.author}`}>{article.author}</Link>
      <br></br>
      <Link to={`/articles/${article_id}/Comments`}>{article.comment_count} comments on this article</Link>
      <p>users have {article.votes} confidence in this article</p>
    </div>
  );
};

export default SingleArticle;
