import axios from "axios";

const newsApi = axios.create({ baseURL: "https://nc-news-articles-ian.herokuapp.com/api" });

export const getArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const getSingleArticle = (article_id) => {
  return newsApi.get(`/articles/?article_id=${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getUsers = () => {
  return newsApi.get("/users");
};
