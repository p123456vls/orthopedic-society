import React from 'react';
import {TitleContainer, Title} from "../../index.styles";
import {FundProjectionScreenOutlined} from '@ant-design/icons';
import withIcon from "../../withIcon";
import {Colors} from "../../constants/colors";
import loadable from "@loadable/component";
const DonateIcon = withIcon(FundProjectionScreenOutlined,{color:Colors.primary});
const DonateOptions = loadable(() => import( "../../components/donate/donate-options.component"));

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