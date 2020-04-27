import React from 'react';
import ArrowLeftOutlined from "@ant-design/icons/lib/icons/ArrowLeftOutlined";
import {Button} from "./post-show.styles";

const BackButton = ({history,isBackButtonVisible}) => {

    return(
      <Button
        onClick={() => {
          history.goBack()
        }}
        visibility={isBackButtonVisible ? 'visible' : 'hidden'}
      >
        <ArrowLeftOutlined/>
        <span> back</span>
      </Button>
     );

};

export default BackButton;