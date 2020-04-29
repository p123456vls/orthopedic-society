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
import * as Load from '../../load';

const NewPost = ({membersEmails}) => {
  const {
    state,
    handleCancel,
    handleOk,
    handleChange,
    handleLoad,
    handlePick,
  } = useNewPost({membersEmails});

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
              <Load.ImagePreview state={state}/>
            </ImagePreviewSection>
            <div style={state.progressUpload > 0 ? {visibility: 'visible'} : {visibility: 'hidden'}}>
            <span style={{color:Colors.primary}}>Remaining pictures to upload: {state.imageCount }</span>
              <Progress
                percent={Number(state.progressUpload.toFixed(0))}
              />
            </div>
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