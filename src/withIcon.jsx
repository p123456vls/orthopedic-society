import React from 'react';

const withIcon = (Wrapped, props) => () => {
  return <Wrapped style={{
    color: props.color,
    fontSize: props.size,
    margin: props.margin,
    cursor: props.cursor
  }}/>

};

export default withIcon;

