import React from 'react';
import {PreviewContainer, PreviewImage} from "./image-preview.styles";

const ImagePreview = ({state}) => {
    return(
      (state.imagePreview.length > 0) && state.imagePreview.map((url, index) => {
        return (
          <PreviewContainer key={index} >
            <PreviewImage src={url} alt={''}/>
          </PreviewContainer>
        );
      })
     );
};

export default ImagePreview;