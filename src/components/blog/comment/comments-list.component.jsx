import React from 'react';
import loadable from '@loadable/component'
import {CommentSpan, CommentsTitle, IconDiv} from "../post/all-posts/all-posts.styles";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import withIcon from "../../../withIcon";
import {Colors} from "../../../constants/colors";
const CommentDeleteConfirm = loadable(() => import("./comment-delete-confirm.component"));

const UserIcon = withIcon(UserOutlined, {color: Colors.primary});

const CommentsList = ({currentPost, currentUserId}) => {


  return (
    <>
      {currentPost.comments.items.length > 0 &&
      <CommentsTitle> Comments</CommentsTitle>}
      {currentPost.comments.items.map((item, index) =>
        <div key={index} style={{marginBottom: 10}}>
          <div style={{clear: 'both'}}>
            <div style={{float: 'left'}}>
              <IconDiv><UserIcon/> {item.user.name} </IconDiv>
            </div>
            {item.user.id === currentUserId &&
            <div style={{display: 'flex', float: 'right'}}>
              <CommentDeleteConfirm item={item}/>
            </div>}

          </div>
          <CommentSpan>{item.content}</CommentSpan>
        </div>)}
    </>
  )
};

export default CommentsList;