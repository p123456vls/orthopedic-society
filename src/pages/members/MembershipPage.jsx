import React from 'react';
import {useSelector} from "react-redux";
import {Main, Title, TitleContainer} from "../../index.styles";
import withIcon from "../../withIcon";
import {Colors} from "../../constants/colors";
import {UserAddOutlined} from '@ant-design/icons';
import loadable from "@loadable/component";
const AboutIcon = withIcon(UserAddOutlined, {color:Colors.primary});
const StepsComponent = loadable(() => import( "../../components/steps/steps.component"));
const MemberAuth = loadable(() => import("../../components/member-auth/member-auth.component"));
const MembershipComponent = loadable(() => import( "../../components/payment/membership.component"));
const ReviewComponent   = loadable(() => import("../../components/payment-details/payment-details.component"));

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