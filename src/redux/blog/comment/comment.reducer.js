import {COMMENT_CANCEL, COMMENT_FAILURE, COMMENT_START, COMMENT_SUCCESS} from "./comment.types";

const initialState = {
  post:null,
  modalVisible: false,
  comment:null
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_START:
      return {
        post:action.payload,
        modalVisible: true
      };
    case COMMENT_SUCCESS:
      return {
        ...state,
        modalVisible: false
      };
    case COMMENT_CANCEL:
    case COMMENT_FAILURE:
      return initialState;
    default:
      break;
  }
  return state;
}
export default commentsReducer;