import {useDispatch} from "react-redux";
import {Auth} from "aws-amplify";
import {signInUser, signOutUser} from "./redux/user/user.actions";
import {resetSteps, stepOneCompleted} from "./redux/step/step.actions";
import {useEffect} from "react";

export const useAuth = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    const getCurrentUser= async () => {
      try {
        const {attributes} = await Auth.currentAuthenticatedUser();
        const authUser = {
          sub:attributes.sub,
          last_name:attributes['custom:last_name'],
          first_name:attributes['custom:first_name'],
          phone:attributes.phone_number,
          address:attributes.address,
          role:attributes['custom:role'],
          email:attributes.email
        };
        dispatch(signInUser(authUser));
        dispatch(stepOneCompleted());
      } catch (e) {
        console.log(e)
      }
    };
    getCurrentUser();
    return () => {}
  }, [dispatch]);


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