import React from 'react';
import {CardItem, DollarIcon, IconContainer, InputNumber, PopConfirmTitle} from "./donate.styles";
import {Icon, Popconfirm} from "antd";

const CustomPopConfirm = (props) => {

  return (
    <Popconfirm
      icon={// icon is used here for the header of the pop confirm
        <IconContainer>
          <PopConfirmTitle>Enter your amount</PopConfirmTitle>
          <DollarIcon>&#36;</DollarIcon>
          <InputNumber
            pattern="[0-9]*"
            value={props.input}
            onChange={props.handleChange}
            name={props.name}
          />
        </IconContainer>
      }
      onConfirm={props.handleClick.bind(this, props.input)}
      cancelText="cancel"
      okText="OK"
    >
      <CardItem><Icon type="star" /> {props.title}</CardItem>
    </Popconfirm>
  );

};

export default CustomPopConfirm;