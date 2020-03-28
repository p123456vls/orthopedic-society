import {RESET, STEP_ONE, STEP_TWO} from "./step.types";

const initialState = {
  stepOne: false,
  stepTwo: false
};

const stepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STEP_ONE:
      return {
        ...state,
        stepOne: true
      };
    case STEP_TWO: {
      return {
        ...state,
        stepTwo: true
      };
    }
    case RESET:
      return {
        initialState
      };
    default:
      return state;
  }
};
export default stepsReducer;