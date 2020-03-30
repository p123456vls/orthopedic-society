import React from 'react';
import { Authenticator, Greetings} from "aws-amplify-react";
import {MyTheme, signUpConfig} from "../../auth-amplify/config";

const MemberAuth = () => {
  return (
    <Authenticator
      theme={MyTheme}
      hide={[Greetings]}
      authState='signUp'
      signUpConfig={signUpConfig}
      usernameAttributes='email'
    />
  )
};

export default MemberAuth;