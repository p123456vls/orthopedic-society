import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {Auth} from "aws-amplify";
import {signInUser} from "./redux/user/user.actions";
import {stepOneCompleted} from "./redux/step/step.actions";

export const useLoginStatus = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCurrentAuthUser = async () => {
      try {
        const {attributes} = await Auth.currentAuthenticatedUser();
        const authUser = {
          sub: attributes.sub,
          last_name: attributes['custom:last_name'],
          first_name: attributes['custom:first_name'],
          phone: attributes.phone_number,
          address: attributes.address,
          role: attributes['custom:role'],
          email: attributes.email
        };
        dispatch(signInUser(authUser));
        dispatch(stepOneCompleted());
      } catch (e) {
        console.log(e)
      }
    };
    getCurrentAuthUser();
    return () => {
    }
  }, [dispatch]);

}