import React from 'react';
import {LazyLoadImage,trackWindowScroll} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {urlPrefix} from "../../../../constants/S3Bucket-url";

const Image = ({imgKey, width = '450px', maxHeight = '500px', height, paddingRight, opacity}) => {
  return (
    <LazyLoadImage
      // alt={image.alt}
      effect="blur"
      src={`${urlPrefix}${imgKey}`}
      style={{
        width: width,
        maxHeight: maxHeight,
        height: height,
        objectFit: 'cover',
        paddingBottom: 2,
        opacity: opacity,
        paddingRight: paddingRight,
      }}
    />

    // <S3Image
    //   imgKey={imgKey}
    //   theme={{
    //     photoImg: {
    //       width: width,
    //       maxHeight: maxHeight,
    //       height:height,
    //       objectFit: 'cover',
    //       paddingBottom: 2,
    //       opacity:opacity,
    //       paddingRight:paddingRight,
    //     }
    //   }}
    // />
  );

};

export default trackWindowScroll(Image);