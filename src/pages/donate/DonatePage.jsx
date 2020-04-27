import React from 'react';
import DonateOptions from "../../components/donate/donate-options.component";
import {TitleContainer, Title} from "../../index.styles";
import {FundProjectionScreenOutlined} from '@ant-design/icons';
import withIcon from "../../withIcon";
import {Colors} from "../../constants/colors";
const DonateIcon = withIcon(FundProjectionScreenOutlined,{color:Colors.primary});

const DonatePage = () => {

  return (
    <>
      <TitleContainer>
        <Title><DonateIcon/> Donations </Title>
      </TitleContainer>
      <DonateOptions/>
    </>
  );

};

export default DonatePage;