import axios from "axios";
import * as types from "./actionType";

const getPosts = (posts) => ({
  type: types.GET_POSTS,
  payload: posts,
});

const postDeleted = () => ({
  type: types.DELETE_POST,
});

const postAdded = () => ({
  type: types.ADD_POST,
});

const getPost = (user) => ({
  type: types.SINGLE_POST,
  payload: user,
});

const postUpdated = () => ({
  type: types.EDIT_POST,
});

export const loadPosts = () => {
  return function (dispatch) {
    axios
      .get(process.env.REACT_APP_API)
      .then((res) => dispatch(getPosts(res.data)))
      .catch((err) => console.log(err));
  };
};

export const deletePost = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then(() => {
        dispatch(postDeleted());
        dispatch(loadPosts(id));
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (post) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, post)
      .then(() => {
        dispatch(postAdded());
      })
      .catch((err) => console.log(err));
  };
};

export const getSinglePost = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        dispatch(getPost(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const updatePost = (post, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, post)
      .then((res) => {
        dispatch(postUpdated());
      })
      .catch((err) => console.log(err));
  };
};
