import React from 'react';
import StepsComponent from "../../components/steps/steps.component";
import MemberAuth from "../../components/member-auth/member-auth.component";
import MembershipComponent from "../../components/payment/membership.component";
import {useSelector} from "react-redux";
import ReviewComponent from "../../components/payment-details/payment-details.component";
import {Main, Title, TitleContainer} from "../../index.styles";
import withIcon from "../../withIcon";
import {Colors} from "../../constants/colors";
import {UserAddOutlined} from '@ant-design/icons';
const AboutIcon = withIcon(UserAddOutlined, {color:Colors.primary});

const MembershipPage = () => {
  const {stepOne, stepTwo} = useSelector(state => state.step);
  const stepsCompleted = stepOne && stepTwo;

  return (
    <>
      <TitleContainer>
        <Title><AboutIcon/> Membership</Title>
      </TitleContainer>
      <Main>
        <StepsComponent/>
        <MemberAuth/>
        <MembershipComponent/>
        {stepsCompleted && <ReviewComponent/>}
      </Main>
    </>
  );

};

export default MembershipPage;