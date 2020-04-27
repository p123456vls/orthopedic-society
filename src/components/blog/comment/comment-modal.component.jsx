import React, {useState} from 'react';
import {Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {commentCreateCancel, commentCreateFailure} from "../../../redux/blog/comment/comment.actions";
import {API, graphqlOperation} from "aws-amplify";
import {createComment} from "../../../graphql/mutations";
import {message} from 'antd';
import {Title} from "../post/post-edit/post-edit.styles";
import {urlPrefix} from "../../../constants/S3Bucket-url";
import useMembers from "../../members/useMembers";


const CommentModal = ({user}) => {

  const dispatch = useDispatch();
  const {modalVisible, post} = useSelector(state => state.comment);
  const [state, setState] = useState({description: ''});
  const {membersData} = useMembers();


  const handleOk = e => {
    e.preventDefault();
    if (!state.description) return;

    API.graphql(graphqlOperation(createComment, {
      input: {
        content: state.description,
        commentUserId: user.sub,
        commentPostId: post.id
      }
    }))
      .then(result => {
        API.post('payments', '/newcomment', {
          body: {
            allUsersEmail: membersData.map(item => item.email),
            currentUser: user,
            title: post.title,
            url: `${urlPrefix}${post.file[0].key}`,
            description: state.description
          }
        })
          .then(result => {
              console.log(result);
              message.success('Your comment has been posted');
              setState({description: ''});
            }
          )
          .catch(e => console.log(e))
      })
      .catch(e => {
        console.log(e)
        dispatch(commentCreateFailure());
        message.error('Comment could not be posted');
      });
  };

  const handleCancel = () => {
    setState({description: ''});
    dispatch(commentCreateCancel())
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };


  return (
    <div>
      <Modal
        title={post && <Title>Comment to {post.title.substr(0, 25)}</Title>}
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <textarea
          className={'post'}
          placeholder={'Enter your comment'}
          onChange={handleChange}
          value={state.description}
          name={'description'}
        />
      </Modal>
    </div>
  );

};

export default CommentModal;