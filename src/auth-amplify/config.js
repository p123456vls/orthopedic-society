import {Colors} from "../constants/colors";

export const MyTheme = {
  button: {
    color: 'white',
    backgroundColor: Colors.primary
  },
  a: {
    color:  Colors.primary
  }
  , toast: {
    backgroundColor: 'white',
    color: 'indianred',
    position: 'fixed'
  }
};

export const signUpConfig = {
  header: 'Don\'t have an account ? sign up',

  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'First Name',
      custom: 'first_name',
      key: 'first_name',
      required: true,
      displayOrder: 1,
      type: 'string',
      placeholder: 'First name'
    },
    {
      label: 'Last Name',
      custom: 'last_name',
      key: 'last_name',
      required: true,
      displayOrder: 2,
      type: 'string',
      placeholder: 'Last name'
    },
    {
      label: 'Current Position',
      custom: 'role',
      key: 'role',
      required: true,
      displayOrder: 3,
      type: 'string',
      placeholder: 'Current Position eg. associate, MD, PHD ...'
    },
    {
      label: 'Address',
      key: 'address',
      required: true,
      displayOrder: 4,
      type: 'string',
      placeholder: 'Full Address'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 5,
      type: 'string',
      placeholder: 'Email'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 6,
      type: 'password',
      placeholder: 'Password (greater than 5 characters)'
    },
    {
      label: 'PhoneNumber',
      key: 'phone_number',
      required: true,
      displayOrder: 7,
      type: 'string'
    }
  ]
};