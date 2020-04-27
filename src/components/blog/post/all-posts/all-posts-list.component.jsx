import React from 'react';
import {sortByDate} from "../../../../helpers";
import {
  CardBody,
  CardFooter,
  CardFooterContainer,
  CardMainImage,
  CardSmallImages,
  CardTitle,
  CardTitleContainer,
  CommentsLink,
  DescriptionDiv,
  ImgIcon,
  ReplyLink,
  LoadingPosts,
  loadingStyle,
  editStyle,
  CartTitleLeftSection,
  CartTitleRightSection,
} from "./all-posts.styles";
import Image from "./image.component";
import MoreImagesList from "./moreImagesList.component";
import {Link} from "react-router-dom";
import CommentModal from "../../comment/comment-modal.component";
import {useDispatch, useSelector} from "react-redux";
import {commentCreateStart} from "../../../../redux/blog/comment/comment.actions";
import CommentsPopOver from "../../comment/comments-popover.component";
import LoadingOutlined from "@ant-design/icons/lib/icons/LoadingOutlined";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import withIcon from "../../../../withIcon";
import EditModal from "../post-edit/post-edit-modal";
import {editPostsStart} from "../../../../redux/blog/post/post.actions";
import PostDeletePopOver from "../post-delete/post-delete-popover";
import {Badge} from "antd";

const LoadingIcon = withIcon(LoadingOutlined, loadingStyle);
const EditIcon = withIcon(EditOutlined, editStyle);

const AllPostsList = () => {

  const user = useSelector(state => state.user);
  const {sub} = user;
  const {allPosts, loading} = useSelector(state => state.post);
  const dispatch = useDispatch();

  return (
    <>
      {loading ? <LoadingPosts><LoadingIcon spin/></LoadingPosts> :
        <>
          {(allPosts && allPosts.length > 0) &&
          sortByDate(allPosts)
            .map(post => (
              <div key={post.id}>
                <CardTitleContainer>

                  <CartTitleLeftSection>
                    <CardTitle>{post.title.length > 25 ?
                      post.title.substr(0, 25) + ` ...` :
                      post.title}
                    </CardTitle>
                    <span>{(sub === post.user.id) && <Badge status="processing"/>}By {post.user.name} </span>
                  </CartTitleLeftSection>

                  {(sub === post.user.id) &&
                  <CartTitleRightSection>
                    <div onClick={() => dispatch(editPostsStart(post))}>
                      <EditIcon/>
                    </div>
                    <EditModal/>
                    <PostDeletePopOver postId={post.id}/>
                  </CartTitleRightSection>}
                </CardTitleContainer>

                <Link to={{pathname: `posts/${post.id}`, state: {currentPost: post, currentUserId: sub}}}>
                  <CardBody pointer>
                    <CardMainImage>
                      <Image imgKey={post.file[0].key} width={'450px'} maxHeight={'500px'}/>
                    </CardMainImage>
                    <CardSmallImages>
                      <MoreImagesList post={post} height={'90px'} width={'90px'}/>
                    </CardSmallImages>
                    <DescriptionDiv>Description</DescriptionDiv>
                    {post.description}
                  </CardBody>
                </Link>

                <CardFooter>
                  <CardFooterContainer>
                    <CommentsLink>
                      <CommentsPopOver post={post}/>
                    </CommentsLink>
                    <ReplyLink onClick={() => dispatch(commentCreateStart(post))}>
                      <ImgIcon src={'/reply.png'}/> reply
                    </ReplyLink>
                  </CardFooterContainer>
                </CardFooter>

              </div>
            ))}
        </>
      }
      <CommentModal user={user}/>
    </>
  );
};

export default AllPostsList;