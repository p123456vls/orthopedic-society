import React from 'react';
import {useDispatch} from "react-redux";
import {API, graphqlOperation} from "aws-amplify";
import {deleteComment} from "../../../graphql/mutations";
import {commentDelete} from "../../../redux/blog/comment/comment.actions";
import {message, Popconfirm} from "antd";
import withIcon from "../../../withIcon";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import {deleteStyle} from "../post/all-posts/all-posts.styles";
const DeleteIcon = withIcon(DeleteOutlined, deleteStyle);

const CommentDeleteConfirm = ({item}) => {

  const dispatch = useDispatch();

  const handleConfirm = async (id) => {
    try {
      await API.graphql(graphqlOperation(deleteComment, {input: {id}}));
      dispatch(commentDelete(id));
      message.success('Comment deleted');
    } catch (e) {
      console.log(e)
      message.error('Comment could not be deleted ')
    }
  }
    return(
      <Popconfirm
        title={<div style={{color: 'white'}}>Delete comment?</div>}
        onConfirm={handleConfirm.bind(this, item.id)}
        placement={'bottomRight'}
        okText="Yes"
        cancelText="No"
      >
        <div><DeleteIcon/></div>
      </Popconfirm>
     );

};

export default CommentDeleteConfirm;