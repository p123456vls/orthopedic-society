import React from 'react';
import Image from "./image.component";

const MoreImagesList = ({post, height, width, maxHeight, opacity, urlPrefix}) => {
  return (
    post.file.map((img, index) => (
      <div key={index} onClick={() => urlPrefix &&
        window.open(`${urlPrefix}${img.key}`)}>
        {index > 0 &&
        <Image
          imgKey={img.key}
          height={height}
          width={width}
          maxHeight={maxHeight}
          paddingRight={2}
          opacity={opacity}
        />
        }
      </div>
    ))
  );
};

export default MoreImagesList;