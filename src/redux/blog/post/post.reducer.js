import {
  DELETE_POST_FAILURE,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  EDIT_POST_CANCEL,
  EDIT_POST_START,
  EDIT_POST_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  NEW_POST_FAILURE,
  NEW_POST_START,
  NEW_POST_SUCCESS,
  SHOW_POST
} from "./post.types";
import {
  COMMENT_DELETE,
  COMMENT_SUCCESS
} from "../comment/comment.types";

const initialState = {
  allPosts: null,
  filteredPost: null,
  loading: false,
  error: '',
  postEdit: {
    id: '',
    title: '',
    description: ''
  },

  editModalVisible: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        allPosts: action.payload,
        loading: false
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case NEW_POST_START:
      return {
        ...state,
        loading: true
      };

    case NEW_POST_SUCCESS:
      return {
        ...state,
        allPosts: [...state.allPosts, action.payload],
        loading: false
      };

    case NEW_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case SHOW_POST:
      return {
        ...state,
        filteredPost: action.payload
      }

    case COMMENT_SUCCESS:
      const comment = action.payload;
      const allPostsArray = [...state.allPosts];
      allPostsArray.find(post =>
        post.id === comment.post.id)
        .comments.items.push({
          id: comment.id,
          content: comment.content,
          user: comment.user
        }
      );
      return {
        ...state,
        allPosts: allPostsArray
      };

    case COMMENT_DELETE:
      const commentId = action.payload;
      let filteredPost = Object.assign({}, state.filteredPost)
      const indexToDelete = filteredPost.comments.items.findIndex(
        comment => comment.id === commentId);
      filteredPost.comments.items.splice(indexToDelete, 1);
      return {
        ...state,
        filteredPost: filteredPost
      }


    case EDIT_POST_START:
      return {
        ...state,
        postEdit: {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description
        },
        editModalVisible: true
      }

    case EDIT_POST_CANCEL:
      return {
        ...state,
        postEdit: {
          id: '',
          title: '',
          description: ''
        },
        editModalVisible: false
      }

    case EDIT_POST_SUCCESS:
      let currentPosts = [...state.allPosts];
      const postToUpdate = action.payload;
      const indexOfPostToUpdate = currentPosts
        .findIndex(post => post.id === action.payload.id);
      currentPosts.splice(indexOfPostToUpdate, 1, postToUpdate);
      return {
        ...state,
        allPosts: currentPosts,
        editModalVisible: false
      }

    case DELETE_POST_START:
      return {
        ...state,
        loading: true
      }

    case DELETE_POST_SUCCESS:
      const postId = action.payload;
      const updatedPosts = [...state.allPosts.filter(post => post.id !== postId)];
      return {
        ...state,
        allPosts: updatedPosts,
        loading: false
      }

    case DELETE_POST_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      break;
  }

  return state;
}

export default postReducer;