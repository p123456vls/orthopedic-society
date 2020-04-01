import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {notification} from "antd";
import * as actions from "./redux/payments/payment.actions";
import {stepTwoCompleted} from "./redux/step/step.actions";
import {createCharge, emailSubscribedMember, subscription} from "./stripeHelper";

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

  const handleMemberShipCharge = async (token) => {
    setLoading(true);
    const subscriptionPayment = await subscription(token, sub, restUserData);
    if (subscriptionPayment.response.id) {
      await emailSubscribedMember(restUserData, subscriptionPayment);
    }
    //update the state to send to the payment details
    const memberShipPayment = {
      amount: subscriptionPayment.response.plan.amount_decimal,
      type: "Membership Payment",
      createdAt: new Date(subscriptionPayment.response.created * 1000),
      validThrough: new Date(subscriptionPayment.response.current_period_end * 1000),
    };
    const memberPayment = {
      payment: memberShipPayment,
      user: subscriptionPayment.response.metadata
    };
    notification.success({
      message: 'Your payment processed successfully!'
    });

    dispatch(actions.memberShipPayment(memberPayment));
    dispatch(stepTwoCompleted());
    setLoading(false);
  };

  const handleCharge = async (token) => {
    setLoading(true);
    await createCharge(token, stripeConfig, sub, restUserData, props);
    setLoading(false);
  };

  return {
    handleCharge,
    handleMemberShipCharge,
    loading,
    stepOne,
    stepTwo,
    stripeConfig,
    restUserData
  };
};

export default usePayment;

