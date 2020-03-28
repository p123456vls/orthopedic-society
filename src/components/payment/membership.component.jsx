import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import './stripe.styles.css';
import { Spin} from "antd";
import {Container, Title, Wrapper} from "./payment.styles";
import usePayment from "../../usePayment";

const MembershipComponent = () => {
  const {
    stripeConfig,
    handleCharge,
    loading,
    restUserData,
    stepOne,
    stepTwo
  } = usePayment({amount: 10000, description: 'Annual Membership', isMemberShip:true});

  return !loading ? (
      <Wrapper display={(stepOne && !stepTwo) ? 'block' : 'none'}>
        <Container>
          <Title>Μembership Payment</Title>
          <StripeCheckout
            token={handleCharge}
            email={restUserData.email}
            currency={stripeConfig.currency}
            stripeKey={stripeConfig.publishableApiKey}
            name={'Hellenic American Hippocratic Society '}
            description={'Annual MemberShip'}
            amount={10000}
            billingAddress
            // shippingAddress
            locale={'auto'}
            allowRememberMe
            label={'Annual Membership $100.00'}
          />
        </Container>
      </Wrapper>)
    :
    (<Spin
        tip={'processing payment... please wait'}
        style={{
          width: '100%',
          padding: '8% 22% 10% 20%',
        }}
      />
    );
};


export default MembershipComponent;