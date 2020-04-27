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
import Image from "../all-posts/image.component";
import MoreImagesList from "../all-posts/moreImagesList.component";
import CommentModal from "../../comment/comment-modal.component";
import BackButton from "./back-button.component";
import useNewPostShow from "./useNewPostShow";
import {sortByDate} from "../../../../helpers";
import CommentsList from "../../comment/comments-list.component";
import {showPost} from "../../../../redux/blog/post/post.actions";
import withIcon from "../../../../withIcon";
import LoadingOutlined from "@ant-design/icons/lib/icons/LoadingOutlined";
import {urlPrefix} from "../../../../constants/S3Bucket-url";

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
        <BackButton history={history} isBackButtonVisible={isBackButtonVisible}/>
        <CardMainImage expand
          onClick={() => {
            window.open(`${urlPrefix}${filteredPost.file[0].key}`)
          }}
        >
          <Image imgKey={filteredPost.file[0].key}/>
          <MoreImagesList post={filteredPost} width={'450px'} maxHeight={'500px'} urlPrefix={urlPrefix}/>
        </CardMainImage>
        <DescriptionDiv>Description</DescriptionDiv>
        <div>{filteredPost.description}</div>
        <CommentsList currentPost={filteredPost} currentUserId={currentUserId}/>
      </CardBody>
      <CommentModal/>
    </Container>
  );
};

export default PostShow;