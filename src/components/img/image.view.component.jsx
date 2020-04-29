import React from 'react';
import {Card, Skeleton} from "antd";
import loadable from "@loadable/component";
const  Img = loadable(() => import('react-image'));

const ImageView = ({imgSrc, name, role, profession}) => {
  return (
    <Card
      style={{width: 240, margin: '0 10px 0 10px'}}
      cover={
          <Img
            alt={name}
            src={imgSrc}
            loader={
              <Skeleton
                active avatar={{
                shape: 'square'
              }}/>
            }
          />
      }
    >
      <h3>{role}</h3>
      <div>{name}</div>
      <div><i>{profession}</i></div>
    </Card>
  )
};

export default ImageView;