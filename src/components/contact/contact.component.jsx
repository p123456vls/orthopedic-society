import React, {useState} from 'react';
import {
  FormField, Input, FormContainer,
  FormSection,
  SectionBody,
  SectionHeader,
  SectionHeaderContent,
  SectionFooter, SectionFooterSecondaryContent, Button, SectionFooterPrimaryContent
} from "aws-amplify-react/lib/Amplify-UI/Amplify-UI-Components-React";
import {Colors} from "../../constants/colors";
import {Anchor, notification} from "antd";
import {EnvironmentTwoTone} from '@ant-design/icons';
import {ErrorSection} from "./contact.styles";
import {validate} from "./validate";
import {API} from "aws-amplify";

const {Link} = Anchor;

const ContactForm = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
  });

  const handleChange = e => {
    // e.persist();
    const {name, value} = e.target;
    let errors = state.errors;
    validate(name, value, errors);
    setState({...state, [name]: value, errors});
  };

  const submit = async (e) => {
    e.preventDefault();
    const noErrors = Object.values(state.errors)
      .every(errorMessage => errorMessage === '');
    const isValues = Object.values(state)
      .every(state => !!state);
    if (!noErrors || !isValues) {
      return;
    }

    API.post('payments', '/contact', {
      body: {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        message: state.message
      }
    }).then(res => {
      notification.success({
        message:'Thank you for your email!',
        description:'You will receive an email confirmation for your records',
        placement:'topRight'
      });
      }).catch(e => console.log(e))
  };


  return (
    <>
      <FormContainer>
        <FormSection>
          <SectionHeader>
            <span>
              <SectionHeaderContent style={{fontSize: 14}}>
               For general questions regarding the society and <br/>  services please use the form below:
              </SectionHeaderContent>
            </span>
          </SectionHeader>
          <SectionBody>
            <FormField>
              {state.errors.firstName && <ErrorSection>{state.errors.firstName}</ErrorSection>}
              <Input
                value={state.firstName}
                name={'firstName'}
                onChange={handleChange}
                placeholder={'First Name'}/>
            </FormField>
            <FormField>
              {state.errors.lastName && <ErrorSection>{state.errors.lastName}</ErrorSection>}
              <Input
                value={state.lastName}
                name={'lastName'}
                onChange={handleChange}
                placeholder={'Last Name'}/>
            </FormField>
            <FormField>
              {state.errors.email && <ErrorSection>{state.errors.email}</ErrorSection>}
              <Input
                value={state.email}
                name={'email'}
                onChange={handleChange}
                placeholder={'e-mail'}/>
            </FormField>
            <FormField>
              {state.errors.message && <ErrorSection>{state.errors.message}</ErrorSection>}

              <p style={{color: Colors.muted}}>Message</p>
              <textarea
                value={state.message}
                onChange={handleChange}
                name={'message'}
              />
            </FormField>
            <SectionFooter>
              <SectionFooterPrimaryContent>
                <Button
                  onClick={submit}
                  style={{backgroundColor: Colors.primary}}>
                  SEND
                </Button>
              </SectionFooterPrimaryContent>
              <SectionFooterSecondaryContent>
                <Anchor>
                  <Link
                    href="https://goo.gl/maps/SX2VYhnjzfrNvMpi8"
                    title={<EnvironmentTwoTone style={{fontSize: 24}}/>}
                    target="_blank"
                  />
                </Anchor>
              </SectionFooterSecondaryContent>
            </SectionFooter>
          </SectionBody>
        </FormSection>
      </FormContainer>
    </>
  );
};

export default ContactForm;