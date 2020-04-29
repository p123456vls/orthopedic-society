import {API, graphqlOperation} from "aws-amplify";
import {getPost, getUser} from "../../graphql/queries";
import {registerUser} from "../../graphql/mutations";

export const registerUserIfNotExists = async (sub, last_name, first_name, email) => {
  let getRegisteredUser = null;
  try {
    getRegisteredUser = await API.graphql(graphqlOperation(getUser, {id: sub}));
  } catch (e) {
    console.log(e)
  }
  if (!getRegisteredUser.data.getUser) {
    try {
      await API.graphql(graphqlOperation(registerUser, {
        input: {
          id: sub,
          name: first_name + " " + last_name,
          email: email
        }
      }));
    } catch (e) {
      console.log(e)
    }
  }
};

export const getCurrentPost = async (id) => {
  let currentPost;
  try {
    currentPost = await API.graphql(graphqlOperation(getPost, {id}))
  } catch (e) {
    console.log(e)
  }
  return currentPost;
}
