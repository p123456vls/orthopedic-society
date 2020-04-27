import {API} from "aws-amplify";
import {notification} from "antd";

export const createCustomerIfNotExists = async (user) => {

  let newCustomer;
  try {
    newCustomer = await API.post(
      'payments',
      '/customer',
      {
        body: {
          id: user.sub,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          description: 'Membership customer',
          metadata: user
        }
      });
  } catch (e) {
    console.log(e)
  }
  return newCustomer;
};


export const subscription = async (token, sub, restUserData) => {
  let subscriptionPayment;
  try {
    subscriptionPayment = await API.post(
      'payments',
      '/subscription',
      {
        body: {
          token: token.id,
          customer: sub,
          user: {
            key: sub,
            ...restUserData
          }
        }
      });
  } catch (e) {
    notification.error({
      message: 'Your payment could not be processed',
      placement: 'topRight'
    });
  }
  return subscriptionPayment;

};

export const emailSubscribedMember = async (restUserData, subscriptionPayment) => {
  try {
    await API.post(
      'payments',
      '/subscription/membershipEmail',
      {
        body: {
          name: restUserData.first_name + ' ' + restUserData.last_name,
          amount: subscriptionPayment.response.plan.amount_decimal,
          customerEmail: restUserData.email
        }
      });
  } catch (e) {
    notification.error({
      message: 'verification email could not be sent',
      placement: 'topRight'
    });
  }
};

export const createCharge = async (token, stripeConfig, sub, restUserData, props,loading) => {
  let isLoading = loading;
  try {
    await API.post(
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
    notification.success({
      message: 'Thank You!',
      description:'Your payment processed successfully! You will receive an email soon for your records.'
    });
   return !isLoading;
  } catch (e) {
    console.log(e);
    notification.error({
      message: 'Your payment could not be processed',
      placement: 'topRight'
    });
    return !isLoading;
  }

};
