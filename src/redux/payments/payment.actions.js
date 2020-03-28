import {DONATION_PAYMENT, MEMBERSHIP_PAYMENT} from "./payment.types";

export const memberShipPayment = (input)=>({
  type:MEMBERSHIP_PAYMENT,
  payload:input
});

export const donationPayment = (input)=>({
  type:DONATION_PAYMENT,
  payload:input
});