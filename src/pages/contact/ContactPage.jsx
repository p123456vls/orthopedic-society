import React from 'react';
import {Title, TitleContainer} from "../../index.styles";
import ContactForm from "../../components/contact/contact.component";
import {ContactsTwoTone} from '@ant-design/icons';
import withIcon from "../../withIcon";
import {Colors} from "../../constants/colors";
const ContactIcon = withIcon(ContactsTwoTone,{color:Colors.primary});

const ContactPage = () => {
  return(
    <>
      <TitleContainer>
        <Title>
          <ContactIcon /> Contact
        </Title>
      </TitleContainer>
      <ContactForm/>
    </>
  );

};

export default ContactPage;