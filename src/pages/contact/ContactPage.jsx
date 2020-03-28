import React from 'react';
import {Title, TitleContainer} from "../../index.styles";
import ContactForm from "../../components/contact/contact.component";
import {ContactsTwoTone} from '@ant-design/icons';
import withIcon from "../../withIcon";
const Icon = withIcon(ContactsTwoTone);

const ContactPage = () => {
  return(
    <>
      <TitleContainer>
        <Title>
          <Icon /> Contact
        </Title>
      </TitleContainer>
      <ContactForm/>
    </>
  );

};

export default ContactPage;