import {useSelector} from "react-redux";
import {useEffect, useState} from "react";


export  const useSteps = ()=> {
  const {stepOne, stepTwo} = useSelector(state => state.step);
  const [state, setState] = useState({current: 0});
  const {isSignedIn} = useSelector(state => state.user);
  const {current} = state;


  useEffect(() => {
    if (!isSignedIn) {
      setState({current: 0})
    }
    if (stepOne) {
      setState({current: 1})
    }
    if (stepTwo) {
      setState({current: 2})
    }
    return () => {
    };
  }, [stepOne, stepTwo, isSignedIn]);

  const onChange = current => {
    setState({current});
  };

  const handleDescription = (step) => {
    switch (step) {
      case 1:
        if (stepOne) {
          return "Completed";
        } else {
          return "Enter your info";
        }
      case 2:
        if (stepTwo) {
          return 'Completed';
        } else if (!stepOne) {
          return 'Waiting';
        } else if (stepOne) {
          return 'Processing';
        }
      // eslint-disable-next-line no-fallthrough
      case 3:
        if (!stepTwo) {
          return "Waiting";
        } else {
          return ''
        }
      default:
        return "";
    }
  };

  const  handleStatus = (step)=> {
    switch (step) {
      case 2:
        if(stepTwo){
          return 'finish';
        }else if(stepOne){
          return 'process';
        } else {
          return 'wait'
        }
      case 3:
        if((!stepTwo && stepOne) || (!stepOne)){
          return 'wait'
        }else {
          return 'finish'
        }
      default:
        return '';
    }
  };
  return{
    onChange,
    handleDescription,
    handleStatus,
    stepOne,
    stepTwo,
    current,
    isSignedIn
  }
};

