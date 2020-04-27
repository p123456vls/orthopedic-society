import React from 'react';
import {Authenticator, Greetings} from "aws-amplify-react";
import {MyTheme, signUpConfig} from "../../auth-amplify/config";

const MemberAuth = (props) => {
  return (
    <Authenticator
      theme={MyTheme}
      hide={[Greetings]}
      authState={!props.auth && 'signUp'}
      signUpConfig={signUpConfig}
      usernameAttributes='email'
    />
  )
};

export default MemberAuth;