import {useEffect} from 'react';
import {graphqlOperation, API} from "aws-amplify";
import {listPosts} from "../../../../graphql/queries";
import {onCreateComment, onCreatePost, onUpdatePost} from "../../../../graphql/subscriptions";
import {useDispatch, useSelector} from "react-redux";
import {
  editPostsSuccess,
  fetchPostsFailure,
  fetchPostsStart,
  fetchPostsSuccess,
  newPostsSuccess
} from "../../../../redux/blog/post/post.actions";
import {message} from "antd";
import {commentCreateSuccess} from "../../../../redux/blog/comment/comment.actions";


const useFetchPosts = () => {

  const dispatch = useDispatch();
  const {isSignedIn} = useSelector(state=> state.user);

  useEffect(() => {
    let createPostListener, createCommentListener, postUpdateListener;
    const fetchPosts = async () => {
      try {
        dispatch(fetchPostsStart());
        const prev = await API.graphql(graphqlOperation(listPosts));
        dispatch(fetchPostsSuccess(prev.data.listPosts.items));

        createPostListener = await API.graphql(graphqlOperation(onCreatePost))
          .subscribe({
            next: postData => {
              const createdPost= postData.value.data.onCreatePost
              dispatch(newPostsSuccess(createdPost));
            }
          });

        createCommentListener = await API.graphql(graphqlOperation(onCreateComment))
          .subscribe({
            next: commentData => {
              const createdComment = commentData.value.data.onCreateComment;
              dispatch(commentCreateSuccess(createdComment))
            }
          });

        postUpdateListener = await API.graphql(graphqlOperation(onUpdatePost))
          .subscribe({
            next: postData => {
              const onUpdatedPost = postData.value.data.onUpdatePost;
              dispatch(editPostsSuccess(onUpdatedPost));
            }
          });

      } catch (e) {
        dispatch(fetchPostsFailure(e));
        message.error(`Something went wrong ${e.message}`)
      }
    };

    isSignedIn &&  fetchPosts();

    return () => {
      if (createPostListener) {
        createPostListener.unsubscribe();
      }
      if (createCommentListener) {
        createCommentListener.unsubscribe();
      }
      if (postUpdateListener) {
        postUpdateListener.unsubscribe();
      }
    };
  }, [dispatch,isSignedIn]);
};

export default useFetchPosts;