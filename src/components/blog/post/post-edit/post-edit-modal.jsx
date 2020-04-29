import React, {useState} from 'react';
import {message, Modal} from "antd";
import {Input, Label, Title} from "./post-edit.styles";
import {useDispatch, useSelector} from "react-redux";
import {editPostCancel, editPostsFailure} from "../../../../redux/blog/post/post.actions";
import {API, graphqlOperation} from "aws-amplify";
import {updatePost} from "../../../../graphql/mutations";

const initialState = {
  id: '',
  title: '',
  description: ''
}

const EditModal = () => {
  const {editModalVisible, postEdit} = useSelector(state => state.post);
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const handleOk = async e => {
    e.preventDefault();

    try {
      await API.graphql(graphqlOperation(
        updatePost, {
          input: {
            id: postEdit.id,
            title: state.title || postEdit.title,
            description: state.description || postEdit.description
          }
        }));
      message.success("Success, case updated");
    } catch (e) {
      dispatch(editPostsFailure(e))
      console.log(e)
      message.error('Case could not be updated');
    }

  }

  const handleChange = (e) => {
    e.persist()
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleCancel = () => {
    setState({...initialState});
    dispatch(editPostCancel())
  };

  return (
    <div>
      <Modal
        title={<Title>Edit {postEdit.title.substr(0, 20)} </Title>}
        visible={editModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Label>Edit Title:</Label>
        <Input
          placeholder={'title'}
          onChange={handleChange}
          defaultValue={postEdit.title}
          name={'title'}
          style={{width: '100%', marginTop: 20}}
        />
        <Label margin>Edit Description:</Label>
        <textarea
          className={'post'}
          placeholder={'edit description'}
          onChange={handleChange}
          defaultValue={postEdit.description}
          name={'description'}
        />
      </Modal>
    </div>
  );

};

export default EditModal;