import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import usePayment from "../../usePayment";
import {Container, Title} from "../payment/payment.styles";
import {Spin} from "antd";

const DonationPaymentComponent = (props) => {
  const {
    stripeConfig,
    handleCharge,
    loading,
    restUserData,
  } = usePayment({amount: props.amount * 100, description: 'Donation', isMemberShip: false});


  return !loading ? (
    <Container>
      <Title>Donation Payment</Title>
      <StripeCheckout
        token={handleCharge}
        email={restUserData.email}
        currency={stripeConfig.currency}
        stripeKey={stripeConfig.publishableApiKey}
        name={'Hellenic American Hippocratic Society '}
        description={`Donation $${props.amount}`}
        amount={props.amount * 100}
        billingAddress
        locale={'auto'}
        allowRememberMe
        label={`Donation amount $${props.amount * 100}`}
      /> </Container>
  ) : (
    <Spin
      tip={'processing payment... please wait'}
      style={{
        width: '100%',
        padding: '8% 22% 10% 20%',
      }}
    />
  );

};

export default DonationPaymentComponent;