import {Colors} from "../../constants/colors";
import styled from 'styled-components';

export const Footer = styled.div`
  float:right
`;

export const ImagePreviewSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  background-color: #f4f4f46e
`;

export const CancelButton = styled.button`
    padding: 7.5px 21px 7.5px 21px;
    background-color: #f9f2f200;
    border: .5px solid #c4c4c4;
    cursor: pointer;
   &:hover{
    color: grey;
  }
`;

export const SubmitButton = styled.button`
  padding: 8px 21px 8px 21px;
  background-color: #258fff;
  color:white;
  cursor: pointer;
  border:none;
  &:hover{
    background-color: #50a0e8;
  }
`;

export const theme ={
  photoPickerButton: {
    backgroundColor: 'white',
    border: 'dashed grey 0.1em',
    color: Colors.primary
  },
  photoPlaceholder: {
    display: 'none'
  },
  sectionBody: {
    display: 'none'
  },
  sectionHeaderHint: {
    display: 'none'
  },
  sectionHeader: {
    display: 'none'
  },
  formSection: {
    minWidth: '100%',
    padding: 0,
    boxShadow: 'none'
  }
};






