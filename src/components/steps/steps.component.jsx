import React from "react";
import {Steps} from 'antd';
import {useSteps} from "./useSteps";
import {Wrapper} from "./steps.styles";

const {Step} = Steps;

const StepsComponent = () => {
  const {
    onChange,
    handleDescription,
    handleStatus,
    stepOne,
    stepTwo,
    current,
  } = useSteps();


  return (
    <>
      <Wrapper>
        <Steps current={current} onChange={onChange}>
          <Step
            title="Login/Create account"
            description={handleDescription(1)}
            disabled={stepOne || current === 0}
          />
          <Step
            title={stepOne ? "Make Payment" : "Enter payment details"}
            description={handleDescription(2)}
            disabled={(!stepTwo || current === 0)}
            status={handleStatus(2)}
          />
          <Step
            title="Review"
            description={handleDescription(3)}
            disabled
            status={handleStatus(3)}
          />
        </Steps>
      </Wrapper>
    </>
  );
};

export default StepsComponent;