import {useState} from 'react';
import {message} from 'antd';
import {Storage, Auth, API, graphqlOperation} from 'aws-amplify';
import aws_exports from "../../../../aws-exports";
import {createPost} from "../../../../graphql/mutations";
import {useDispatch, useSelector} from "react-redux";

import {goToAllPosts} from "../../helper";
import {registerUserIfNotExists} from "../../graphql-helper";
import {newPostsFailure, newPostsStart} from "../../../../redux/blog/post/post.actions";
import {urlPrefix} from "../../../../constants/S3Bucket-url";
import useMembers from "../../../members/useMembers";


const initialState = {
  visible: false,
  loading: false,
  title: '',
  description: '',
  image: [],
  imagePreview: [],
  isUploading: false,
  progressUpload: 0,
  maxPicUpload: 20,
  imageCount: 0,
};

const useNewPost = () => {
  const {membersData} = useMembers();
  const [state, setState] = useState(initialState);
  const user = useSelector(state => state.user);
  const {isSignedIn, sub, email, first_name, last_name} = user;

  const dispatch = useDispatch();


  const handleOk = async (e) => {
    e.preventDefault();

    dispatch(newPostsStart());

    let {title, image, description} = state;
    if (!title || !description) {
      message.warning('title and description are required');
      return;
    }
    await registerUserIfNotExists(sub, last_name, first_name, email);

    const files = [];
    const visibility = 'public';
    const {identityId} = await Auth.currentCredentials();

    image.map(img =>
      Storage.put(
        `/${visibility}/${identityId}/${Date.now()}-${img.name}`,
        img.file,
        {
          contentType: img.type,
          progressCallback: progress => {
            setState({
              ...state,
              progressUpload: state.progressUpload = (progress.loaded / progress.total * 100)
            });
          }
        },
      ).then(result => {
        setState(({
          ...state,
          imageCount: state.imageCount = state.imageCount - 1
        }));
        files.push({
          key: result.key,
          bucket: aws_exports.aws_user_files_s3_bucket,
          region: aws_exports.aws_project_region
        });
        const input = {
          title: title,
          description: description,
          file: files,
          postUserId: sub
        };

        if (state.imageCount === 0) {

          API.graphql(graphqlOperation(createPost, {input}))
            .then(result => {

              message.success('Success, your case has been posted!');
              setState(initialState);
              state.image.splice(0, state.image.length);
              goToAllPosts();

              API.post('payments',
                '/newcase', {
                  body: {
                    allUsersEmail: membersData.map(item => item.email),
                    currentUser: user,
                    title,
                    url:`${urlPrefix}${input.file[0].key}`
                  }
                })
                .then(result => {
                  console.log(result);
                })
                .catch(e => console.log(e))


            })
            .catch(e => {
              console.log(e)
              message.error('Something went wrong');
            });
        }

      }).catch(e => {
        console.log(e);
        dispatch(newPostsFailure(e));
      })
    );
  };

  const handleLoad = (imgPreview) => {
    if (state.maxPicUpload === 0) {
      return;
    }
    setState(({
      ...state,
      imagePreview: [...state.imagePreview, imgPreview],
      maxPicUpload: state.maxPicUpload = state.maxPicUpload - 1,
      imageCount: state.imageCount = state.imageCount + 1
    }))
  };

  const handlePick = (img) => {
    if (state.maxPicUpload === 0) {
      message.info(`Upload capacity ${state.maxPicUpload} pictures`);
      return;
    }
    state.image.push(img);
  };

  const handleChange = (e) => {
    e.persist();
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleCancel = () => {
    setState(initialState);
    state.image.splice(0, state.image.length)
    goToAllPosts();
  };

  return {
    state,
    handleCancel,
    handleOk,
    handleChange,
    handleLoad,
    handlePick,
    isSignedIn
  };

};

export default useNewPost;