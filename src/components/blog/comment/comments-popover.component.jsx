import React from 'react';
import {Badge, Popover} from "antd";
import {badge, ImgIcon, mask} from "../post/all-posts/all-posts.styles";
import {countOccurrences} from "../../../helpers";

const CommentsPopOver = ({post}) => {
  return (
    <Popover
      style={mask}
      title={post.comments.items.length > 0 ? 'Users Replied' : 'No Comments Yet'}
      content={
        Object.entries(
          countOccurrences(post.comments.items.map(comment => comment.user.name))
        ).map(
          ([key, value]) => [
            <p style={{color: 'white'}} key={key}> {key} {value} </p>
          ]
        )
      }
    >
      <ImgIcon src={'/comments.png'}/>
      <Badge
        title={''}
        style={badge}
        count={post.comments.items.length}
        showZero
      />
    </Popover>
  );
};

export default CommentsPopOver;