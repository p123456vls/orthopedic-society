import React, {useState} from 'react';
import {
  Container,
  InnerContainer,
  OptionsSection,
  Card,
  Title,
  SubTitle, HiddenPaymentForm,
} from "./donate.styles";
import CustomPopConfirm from "./custom-popconfirm";
import DonationPaymentComponent from "./donation-payment.component";
import {Icon, Spin} from "antd";
import usePayment from "../payment/usePayment";

const DonateOptions = () => {

  const [state, setState] = useState({
    inputFiveK: '5000',
    inputTwoK: '2000',
    inputOneK: '1000',
    inputZero: '',
    amount: 0
  });

  const handleClick = async (value) => {
    if (!value) return;
    await setState({...state, amount: value});
    document.querySelector(
      ".StripeCheckout"
    ).click();
  };

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: validInput(e.target.value),
      amount: e.target.value
    });
  };

  const validInput = input => (
    isNaN(input) ? '' : input
  );

  const {
    stripeConfig,
    handleCharge,
    loading,
    restUserData,
  } = usePayment({amount: state.amount * 100, description: 'Donation', isMemberShip: false});


  return !loading? (
    <Container>
      <HiddenPaymentForm id={'stripe'} >
        <DonationPaymentComponent
          amount={parseFloat(state.amount)}
          stripeConfig={stripeConfig}
          handleCharge={handleCharge}
          restUserData={restUserData}
        />
      </HiddenPaymentForm>
      <Card>
        <Title><Icon type="trophy"/> Recognition Levels</Title>
        <SubTitle>Your donation empower us to continue our mission!</SubTitle>
        <SubTitle>Please choose one of the options below:</SubTitle>

        <InnerContainer>
          <OptionsSection>
            <CustomPopConfirm
              handleClick={handleClick}
              handleChange={handleChange}
              name={'inputFiveK'}
              input={state.inputFiveK}
              title={'Olympic $5000 - more'}
            />
            <CustomPopConfirm
              handleClick={handleClick}
              handleChange={handleChange}
              name={'inputTwoK'}
              input={state.inputTwoK}
              title={'Founder $2000-$5000'}
            />
          </OptionsSection>
          <OptionsSection>
            <CustomPopConfirm
              handleClick={handleClick}
              handleChange={handleChange}
              name={'inputOneK'}
              input={state.inputOneK}
              title={'Patron $1000-$2000'}
            />
            <CustomPopConfirm
              handleClick={handleClick}
              handleChange={handleChange}
              name={'inputZero'}
              input={state.inputZero}
              title={'Friend $0-$1000'}
            />
          </OptionsSection>
        </InnerContainer>
      </Card>
    </Container>
  ): (
    <Spin
      tip={'processing payment... please wait'}
      style={{
        width: '100%',
        padding: '8% 22% 10% 20%',
        opacity:0.7
      }}
    />
  );
};


export default DonateOptions;
