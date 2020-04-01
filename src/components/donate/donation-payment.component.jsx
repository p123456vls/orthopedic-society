import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import {Container, Title} from "../payment/payment.styles";


const DonationPaymentComponent = ({amount,handleCharge,stripeConfig,restUserData}) => {

  return (
    <Container>
      <Title>Donation Payment</Title>
      <StripeCheckout
        token={handleCharge}
        email={restUserData.email}
        currency={stripeConfig.currency}
        stripeKey={stripeConfig.publishableApiKey}
        name={'Hellenic American Hippocratic Society '}
        description={`Donation $${amount}`}
        amount={amount * 100}
        billingAddress
        locale={'auto'}
        allowRememberMe
        label={`Donation amount $${amount * 100}`}
      /> </Container>
  );

};

export default DonationPaymentComponent;