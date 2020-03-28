import {useEffect, useState} from "react";
import {Hub} from "aws-amplify";
import {useDispatch} from "react-redux";
import {signInUser} from "../redux/user/user.actions";
import {resetSteps, stepOneCompleted} from "../redux/step/step.actions";
import {notification} from "antd";


const useEvents = () => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState('');

  useEffect(() => {
    Hub.listen(/.*/, (data) => {

      const currentEvent = data.payload.event;
      setEvent(currentEvent);
      console.log(currentEvent);

      if (currentEvent === 'signUp') {
        notification.info({
          message: 'We sent you an email with a code to verify your email address',
          description: 'Please check also your spam/junk folder',
          placement: 'topRight',
          duration: 10
        });
      }
      const userAttributes = data.payload.data.attributes || {};

      if (userAttributes) {
        const user = {
          sub: userAttributes.sub,
          last_name: userAttributes['custom:last_name'],
          first_name: userAttributes['custom:first_name'],
          phone: userAttributes.phone_number,
          role: userAttributes['custom:role'],
          address: userAttributes.address,
          email: userAttributes.email
        };

        if (currentEvent === 'signIn') {
          dispatch(signInUser(user));
          dispatch(stepOneCompleted());
        }
        if (currentEvent === 'signOut') {
          dispatch(resetSteps())
        }
      }
    });

    return () => {
      Hub.remove('auth', data => {
      });
      notification.destroy();
    };
  }, [dispatch]);


  return {
    event,
  }
};

export default useEvents;