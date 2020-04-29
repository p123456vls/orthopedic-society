import {COMMENT_CANCEL, COMMENT_DELETE, COMMENT_FAILURE, COMMENT_START, COMMENT_SUCCESS} from "./comment.types";

export const commentCreateStart = (post)=>({
  type:COMMENT_START,
  payload:post
});

export const commentCreateSuccess = (comment)=> ({
  type:COMMENT_SUCCESS,
  payload:comment
});

export const commentCreateCancel = ()=> ({
  type:COMMENT_CANCEL
});

export const commentCreateFailure = ()=> ({
  type:COMMENT_FAILURE
});

export const commentDelete = (commentId) => ({
  type:COMMENT_DELETE,
  payload:commentId
})