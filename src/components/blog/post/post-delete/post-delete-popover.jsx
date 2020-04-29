import React from 'react';
import {message, Popconfirm} from "antd";
import withIcon from "../../../../withIcon";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import {deleteStyle} from "../all-posts/all-posts.styles";
import {useDispatch} from "react-redux";
import {API, graphqlOperation} from "aws-amplify";
import {deletePost} from "../../../../graphql/mutations";
import {
  deletePostFailure,
  deletePostStart,
  deletePostSuccess
} from "../../../../redux/blog/post/post.actions";

const DeleteIcon = withIcon(DeleteOutlined, deleteStyle);

const PostDeletePopOver = ({postId}) => {

  const dispatch = useDispatch();

  const handleConfirm = async () => {
    try {
      dispatch(deletePostStart(postId));
      await API.graphql(graphqlOperation(deletePost, {input: {id:postId}}));
      dispatch(deletePostSuccess(postId));
      message.success("Case permanently deleted");
    } catch (e) {
      message.error('Case could not be deleted');
      console.log(e);
      dispatch(deletePostFailure(e));
    }
  };


  return (
    <Popconfirm
      title={<div style={{color: 'white'}}>Delete Case?</div>}
      onConfirm={handleConfirm}
      placement={'bottomRight'}
      okText="Yes"
      cancelText="No"
    >
      <div><DeleteIcon/></div>
    </Popconfirm>
  );

};

export default PostDeletePopOver;