import { SIGN_IN, SIGN_UP, SIGN_OUT } from "./user.types";

export const signInUser = (user) => ({
  type: SIGN_IN,
  payload: user
});

export const signUpUser = (user) => ({
  type: SIGN_UP,
  payload: user
});

export const signOutUser = () => ({
  type: SIGN_OUT
});
