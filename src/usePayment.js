import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {API} from "aws-amplify";
import {notification} from "antd";
import * as actions from "./redux/payments/payment.actions";
import {stepTwoCompleted} from "./redux/step/step.actions";
require('dotenv').config();

const usePayment = (props) => {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {stepOne, stepTwo} = useSelector(state => state.step);
  const {sub, ...restUserData} = useSelector(state => state.user);
  const stripeConfig = {
    currency: 'USD',
    publishableApiKey: process.env.REACT_APP_KEY
  };

  const handleCharge = async (token) => {
    let stripePayment;
    try {
      setLoading(true);
      stripePayment = await API.post(
        'payments',
        '/charge',
        {
          body: {
            token,
            charge: {
              currency: stripeConfig.currency,
              amount: props.amount,
              description: props.description,
            },
            metadata: {key: sub, ...restUserData}
          }
        });
       // console.log('stripePayment ', stripePayment)
      notification.success({
        message: 'Your payment processed successfully!'
      });

      setLoading(false);

    } catch (e) {
      console.log(e);
      notification.error({
        message: 'Your payment could not be processed',
        placement: 'topRight'
      });
      setLoading(false);
      return;
    }
    // if it is a membership payment dispatch actions
    // to know if the user created step two
    // which is the payment so that we can show
    // payment details, else it is a donation so we
    // send only email confirmation
    if (props.isMemberShip) {
      const memberShipPayment = {
        amount: stripePayment.charge.amount,
        type: stripePayment.charge.description,
        createdAt: new Date(stripePayment.charge.created * 1000)
      };
      const memberPayment = {
        payment: memberShipPayment,
        user: stripePayment.charge.metadata
      };
      dispatch(actions.memberShipPayment(memberPayment));
      dispatch(stepTwoCompleted());
    }

    setLoading(false);
  };

  return {
    handleCharge,
    loading,
    stepOne,
    stepTwo,
    stripeConfig,
    restUserData
  };
};

export default usePayment;

