import React from 'react';
import loadable from "@loadable/component";
import {Title, TitleContainer} from "../../index.styles";
import {ContactsTwoTone} from '@ant-design/icons';
import withIcon from "../../withIcon";
import {Colors} from "../../constants/colors";

const ContactIcon = withIcon(ContactsTwoTone, {color: Colors.primary});
const ContactForm = loadable(() => import( "../../components/contact/contact.component"));

const ContactPage = () => {
  return (
    <>
      <TitleContainer>
        <Title>
          <ContactIcon/> Contact
        </Title>
      </TitleContainer>
      <ContactForm/>
    </>
  );

};

export default ContactPage;