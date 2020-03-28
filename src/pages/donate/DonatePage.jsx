import React from 'react';
import DonateOptions from "../../components/donate/donate-options.component";
import {TitleContainer, Title} from "../../index.styles";
import {FundProjectionScreenOutlined} from '@ant-design/icons';
import withIcon from "../../withIcon";
import {Colors} from "../../constants/colors";
const Icon = withIcon(FundProjectionScreenOutlined,Colors.primary);

const DonatePage = () => {

  return (
    <>
      <TitleContainer>
        <Title><Icon/> Donations </Title>
      </TitleContainer>
      <DonateOptions/>
    </>
  );

};

export default DonatePage;