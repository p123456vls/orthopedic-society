import React from 'react';

const withIcon = (Wrapped,  color)  => {
  const WithIcon = () => {
    return <Wrapped style={{
      color: color
    }}/>
  };
  return WithIcon;
};

export default withIcon;