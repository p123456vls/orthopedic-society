import {SIGN_IN, SIGN_OUT, SIGN_UP} from "./user.types";


const initialState = {
  sub: '',
  last_name: '',
  first_name: '',
  phone: '',
  address:'',
  role: '',
  email: '',
  isSignedIn: false
};

const userReducer = (state = initialState, action) => {

  switch (action.type) {

    case SIGN_IN:
      return {
        ...action.payload,
        isSignedIn: true
      };
    case SIGN_UP:
      return {
        ...state,
        email: action.payload.email,
      };

    case SIGN_OUT:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;