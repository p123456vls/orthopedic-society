import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  NEW_POST_START,
  NEW_POST_SUCCESS,
  NEW_POST_FAILURE,
  EDIT_POST_START,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  EDIT_POST_CANCEL,
  DELETE_POST_START,
  DELETE_POST_SUCCESS, SHOW_POST
} from "./post.types";

export const fetchPostsStart = () => ({
  type: FETCH_POSTS_START,
});
export const fetchPostsSuccess = (input) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: input
});
export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error
});

export const newPostsStart = () => ({
  type: NEW_POST_START,
});
export const newPostsSuccess = (input) => ({
  type: NEW_POST_SUCCESS,
  payload: input
});
export const newPostsFailure = (error) => ({
  type: NEW_POST_FAILURE,
  payload: error
});

export const editPostsStart = (input) => ({
  type: EDIT_POST_START,
  payload: input
});
export const editPostsSuccess = (input) => ({
  type: EDIT_POST_SUCCESS,
  payload: input
});

export const editPostCancel = () => ({
  type: EDIT_POST_CANCEL
})

export const editPostsFailure = (error) => ({
  type: EDIT_POST_FAILURE,
  payload: error
});

export const deletePostStart = (postId) => ({
  type: DELETE_POST_START,
  payload: postId
});

export const deletePostSuccess = (postId) => ({
  type: DELETE_POST_SUCCESS,
  payload: postId
});
export const deletePostFailure = (error) => ({
  type: DELETE_POST_START,
  payload: error
});

export const showPost = (post) => ({
  type:SHOW_POST,
  payload:post
})