import {RESET, STEP_ONE, STEP_TWO} from "./step.types";


export const stepOneCompleted = () => ({
  type: STEP_ONE,
});

export const stepTwoCompleted = () => ({
  type: STEP_TWO,
});

export const resetSteps = () => ({
  type: RESET
});