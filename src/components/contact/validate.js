export const validate = (name, value, errors) => {

  const validEmailRegex =
    RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

  switch (name) {
    case 'firstName':
      errors.firstName =
        value.length < 2
          ? 'Please enter a valid name'
          : '';
      break;
    case 'lastName':
      errors.lastName =
        value.length < 2
          ? 'Please enter a valid name'
          : '';
      break;
    case 'email':
      errors.email =
        validEmailRegex.test(value)
          ? ''
          : 'Please enter a valid email';
      break;
    case 'message':
      errors.message =
        value.length < 6
          ? 'Please enter a message'
          : '';
      break;
    case 'password':
      errors.password =
        value.length < 8
          ? 'Please enter a valid password over 7 characters'
          : '';
      break;
    default:
      break;
  }
};