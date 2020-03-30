import React, {useState} from 'react';
import {
  Container,
  InnerContainer,
  Flex,
  Card,
  Title,
  SubTitle,
} from "./donate.styles";
import CustomPopConfirm from "./custom-popconfirm";
import DonationPaymentComponent from "./donation-payment.component";
import {Icon} from "antd";

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

  return (
    <Container>
      <div id={'stripe'} style={{display: 'none'}}>
        <DonationPaymentComponent
          amount={parseFloat(state.amount)}
        />
      </div>
      <Card>
        <Title><Icon type="trophy"/> Recognition Levels</Title>
        <SubTitle>Your donation empower us to continue our mission!</SubTitle>
        <SubTitle>Please choose one of the options below:</SubTitle>

        <InnerContainer>
          <Flex>
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
          </Flex>
          <Flex>
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
          </Flex>
        </InnerContainer>
      </Card>
    </Container>
  );
};


export default DonateOptions;