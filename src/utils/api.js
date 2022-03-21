import axios from "axios";

const gamesApi = axios.create({ baseURL: "https://iansncgames.herokuapp.com/api" });

export const getReviews = (category) => {
  return gamesApi.get("/reviews", { params: { category } }).then((res) => {
    return res.data.reviews;
  });
};

export const getSingleReview = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getComments = (review_id) => {
  return gamesApi.get(`reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const deleteComment = (comment_id) => {
  return gamesApi.delete(`/comment/${comment_id}`).then((res) => {
    return console.log("success");
  });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviewsByCategory = (category) => {
  return gamesApi.get(`/categories`, { params: { category } }).then((res) => {
    return res.data.reviews;
  });
};

export const getUsers = () => {
  return gamesApi.get("/users").then((res) => {
    return res.data.users;
  });
};

export const getUserByUsername = (username) => {
  return gamesApi.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};

export const ToggleUpvote = (review_id) => {
  return gamesApi.patch(`/reviews/${review_id}`).then((res) => {
    return res.data;
  });
};
