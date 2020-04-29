import {useDispatch} from "react-redux";
import {Auth} from "aws-amplify";
import {signOutUser} from "./redux/user/user.actions";
import {resetSteps} from "./redux/step/step.actions";

export const useSignOut = () => {

  const dispatch = useDispatch();

  const signOutAmplify = async () => {
    try {
      await Auth.signOut();
      dispatch(signOutUser());
      dispatch(resetSteps());
    } catch (e) {
      console.log(e)
    }
  };

  return {
    signOutAmplify
  }
};