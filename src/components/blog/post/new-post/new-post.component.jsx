import React from 'react';
import {Progress} from "antd";
import useNewPost from "./useNewPost";
import {PlusOutlined} from '@ant-design/icons';
import {PhotoPicker} from 'aws-amplify-react';

import {
  FormField, Input, FormContainer,
  FormSection,
  SectionBody,
  SectionHeader,
  SectionHeaderContent,
} from "aws-amplify-react/lib/Amplify-UI/Amplify-UI-Components-React";
import {Colors} from "../../../../constants/colors";
import {CancelButton, Footer, ImagePreviewSection, SubmitButton, theme} from "../../form.styles";
import ImagePreview from "./image-preview.component";


const NewPost = () => {
  const {
    state,
    handleCancel,
    handleOk,
    handleChange,
    handleLoad,
    handlePick,
  } = useNewPost();

  return (
    <>
      <FormContainer>
        <FormSection>
          <SectionHeader style={{maxWidth: 430}}>
            <span>
              <SectionHeaderContent style={{fontSize: 14}}>
                <h2 style={{color: Colors.muted}}> <PlusOutlined/> New Case</h2>
              </SectionHeaderContent>
            </span>
          </SectionHeader>
          <SectionBody>
            <FormField>
              <Input
                placeholder={'title'}
                onChange={handleChange}
                value={state.title}
                name={'title'}
              />
            </FormField>
            <textarea
              className={'post'}
              placeholder={'description'}
              onChange={handleChange}
              value={state.description}
              name={'description'}
            />

            <PhotoPicker
              onLoad={handleLoad}
              preview='hidden'
              onPick={handlePick.bind(this)}
              theme={theme}/>
            <ImagePreviewSection>
              <ImagePreview state={state}/>
            </ImagePreviewSection>

            <Progress
              style={state.progressUpload > 0 ? {visibility: 'visible'} : {visibility: 'hidden'}}
              percent={Number(state.progressUpload.toFixed(0))}
            />
             <Footer>
                <CancelButton onClick={handleCancel}>Cancel</CancelButton>
                <SubmitButton onClick={handleOk}>Submit</SubmitButton>
              </Footer>
          </SectionBody>
        </FormSection>
      </FormContainer>
    </>
);
};

export default NewPost;