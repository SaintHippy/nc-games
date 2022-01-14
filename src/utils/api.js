import axios from "axios";

const newsApi = axios.create({ baseURL: "https://nc-news-articles-ian.herokuapp.com/api" });

export const getArticles = (topic) => {
  return newsApi.get("/articles", { params: { topic } }).then((res) => {
    return res.data.articles;
  });
};

export const getSingleArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getComments = (article_id) => {
  return newsApi.get(`articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comment/${comment_id}`).then((res) => {
    return console.log("success");
  });
};

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticlesByTopic = (topic) => {
  return newsApi.get(`/articles`, { params: { topic } }).then((res) => {
    return res.data.articles;
  });
};

export const getUsers = () => {
  return newsApi.get("/users").then((res) => {
    return res.data.users;
  });
};

export const getUserByUsername = (username) => {
  return newsApi.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};
