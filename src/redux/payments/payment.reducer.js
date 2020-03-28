import {DONATION_PAYMENT, MEMBERSHIP_PAYMENT} from "./payment.types";

const initialState = {
  payment: {
    paymentAmount: '',
    paymentType: '',
    createdAt: ''
  },
  user: {
    last_name: '',
    first_name: '',
    phone: '',
    address: '',
    role: '',
    email: '',
  }
};

const paymentReducer = (state = initialState, action) => {

  switch (action.type) {

    case MEMBERSHIP_PAYMENT:
    case DONATION_PAYMENT:

      const {amount, type, createdAt} = action.payload.payment;
      const {
        last_name,
        first_name,
        phone,
        address,
        role,
        email
      } = action.payload.user;

      return {
        ...state,
        payment: {
          paymentAmount: amount,
          paymentType: type,
          createdAt: createdAt
        },
        user: {
          last_name: last_name,
          first_name: first_name,
          phone: phone,
          address: address,
          role: role,
          email: email,
        }
      };
    default:
      return state;
  }
};

export default paymentReducer;