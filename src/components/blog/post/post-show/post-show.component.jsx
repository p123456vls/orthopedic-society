import React, {useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {
  CardBody,
  CardMainImage,
  CardTitle,
  CardTitleContainer,
  DescriptionDiv,
  loadingStyle,
} from "../all-posts/all-posts.styles";
import {Container, LoadingPost} from "./post-show.styles";
import {useDispatch, useSelector} from "react-redux";
import useNewPostShow from "./useNewPostShow";
import {sortByDate} from "../../../../helpers";
import {showPost} from "../../../../redux/blog/post/post.actions";
import withIcon from "../../../../withIcon";
import LoadingOutlined from "@ant-design/icons/lib/icons/LoadingOutlined";
import {urlPrefix} from "../../../../constants/S3Bucket-url";
import * as Load from '../../load';


const LoadingIcon = withIcon(LoadingOutlined, loadingStyle);


const PostShow = () => {
  const dispatch = useDispatch();
  const {isBackButtonVisible, onMouseOver, onMouseOut} = useNewPostShow();
  const history = useHistory();
  const location = useLocation();
  const {currentPost, currentUserId} = location.state;
  let {allPosts, filteredPost} = useSelector(state => state.post);
  if (!filteredPost) filteredPost = currentPost;

  useEffect(() => {
    const filteredPost = allPosts &&
      Object.assign({}, ...allPosts
        .filter(item => item.id === currentPost.id));
    filteredPost && sortByDate(filteredPost.comments.items, true);
    dispatch(showPost(filteredPost))
    return () => {
    };
  }, [allPosts, dispatch, currentPost]);

  return !filteredPost ? (
    <LoadingPost><LoadingIcon spin/></LoadingPost>
  ) : (
    <Container key={filteredPost.id}>
      <CardTitleContainer margin>
        <CardTitle>{filteredPost.title}
        </CardTitle>
        <span>By {filteredPost.user.name} </span>
      </CardTitleContainer>
      <CardBody onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        <Load.BackButton history={history} isBackButtonVisible={isBackButtonVisible}/>
        <CardMainImage expand
          onClick={() => {
            window.open(`${urlPrefix}${filteredPost.file[0].key}`)
          }}
        >
          <Load.Image imgKey={filteredPost.file[0].key}/>
          <Load.MoreImagesList post={filteredPost} width={'450px'} maxHeight={'500px'} urlPrefix={urlPrefix}/>
        </CardMainImage>
        <DescriptionDiv>Description</DescriptionDiv>
        <div>{filteredPost.description}</div>
        <Load.CommentsList currentPost={filteredPost} currentUserId={currentUserId}/>
      </CardBody>
      <Load.CommentModal/>
    </Container>
  );
};

export default PostShow;