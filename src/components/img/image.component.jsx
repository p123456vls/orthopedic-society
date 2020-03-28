import React from 'react';
import VisibilitySensor from "react-visibility-sensor";
import {Card, Skeleton} from "antd";
import Img from 'react-image';

const ImageView = ({imgSrc, name, role, profession}) => {
  return (
    <Card
      style={{width: 240, margin: '0 10px 0 10px'}}
      cover={
        <VisibilitySensor>
          <Img
            alt={name}
            src={imgSrc}
            loader={
              <Skeleton
                active avatar={{
                shape:'square'
              }} />
            }
          />
        </VisibilitySensor>
      }
    >
      <h3>{role}</h3>
      <div>{name}</div>
      <div><i>{profession}</i></div>
    </Card>
  )
};

export default ImageView;