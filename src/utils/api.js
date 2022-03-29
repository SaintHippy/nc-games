import axios from "axios";

const gamesApi = axios.create({ baseURL: "https://iansncgames.herokuapp.com/api" });

export const getReviews = (category, sort_by) => {
  let path = "/reviews";
  if (category && sort_by) {
    path += `?category=${category}&sort_by=${sort_by}`;
  } else if (category) {
    path += `?category=${category}`;
  } else if (sort_by) {
    path += `?sort_by=${sort_by}`;
  }

  return gamesApi.get(path).then((res) => {
    return res.data.reviews;
  });
};

export const getSingleReview = async (review_id) => {
  const res = await gamesApi.get(`/reviews/${review_id}`);
  return res.data.review;
};

export const getComments = async (review_id) => {
  const res = await gamesApi.get(`reviews/${review_id}/comments`);
  return res.data.comments;
};

export const postComment = async (username, body, review_id) => {
  const res = await gamesApi.post(`/reviews/${review_id}/comments`, {
    username: username,
    body: body,
  });
  return res;
};

export const deleteComment = async (comment_id) => {
  const res = await gamesApi.delete(`/comments/${comment_id}`);
  return res;
};

export const getCategories = async () => {
  const res = await gamesApi.get("/categories");
  return res.data.categories;
};

export const getReviewsByCategory = async (category) => {
  const res = await gamesApi.get(`/categories`, { params: { category } });
  return res.data.reviews;
};

export const getUsers = async () => {
  const res = await gamesApi.get("/users");
  return res.data.users;
};

export const getUserByUsername = async (username) => {
  const res = await gamesApi.get(`/users/${username}`);
  return res.data.user;
};

export const toggleVote = async (review_id, numOfVotes) => {
  const res = await gamesApi.patch(`/reviews/${review_id}`, { votes: numOfVotes });

  return res.data.review.votes;
};
