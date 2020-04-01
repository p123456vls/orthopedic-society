import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import './stripe.styles.css';
import {Spin} from "antd";
import {ContactLink, Container, Title, Wrapper} from "./payment.styles";
import usePayment from "../../usePayment";
import {useHistory} from "react-router-dom";


const MembershipComponent = () => {
  const history = useHistory();
  const {
    stripeConfig,
    handleMemberShipCharge,
    loading,
    restUserData,
    stepOne,
    stepTwo
  } = usePayment({amount: 10220, description: 'Annual Membership', isMemberShip: true});

  return !loading ? (
      <Wrapper display={(stepOne && !stepTwo) ? 'block' : 'none'}>
        <Container>
          <Title>Μembership Payment</Title>
          <StripeCheckout
            token={handleMemberShipCharge}
            email={restUserData.email}
            currency={stripeConfig.currency}
            stripeKey={stripeConfig.publishableApiKey}
            name={'Hellenic American Hippocratic Society '}
            description={'Annual MemberShip'}
            amount={10220}
            billingAddress
            // shippingAddress
            locale={'auto'}
            allowRememberMe
            label={'Annual Membership $102.20'}
          />
          <br/>
          <br/>
          <b><small>Please note this is a recurrent annual payment. You have the option of cancelling future payments by
            <ContactLink
              onClick={() => history.push('/contact-us')}
            >
              {' '} contacting us
            </ContactLink> or email us at hellenicamericanhippocratic@gmail.com
          </small></b>
        </Container>
      </Wrapper>)
    :
    (<Spin
        tip={'processing payment... please wait'}
        style={{
          width: '100%',
          padding: '8% 22% 10% 20%',
          opacity:0.7
        }}
      />
    );
};


export default MembershipComponent;