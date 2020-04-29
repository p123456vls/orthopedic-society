import styled from "styled-components";

export const IconContainer = styled.div`
 display: grid;
`;

export const PopConfirmTitle = styled.p`
   color:white;
`;

export const Title = styled.h2`
 margin-left: 13px;
  @media screen and (max-width: 600px) {
 
  }
`;

export const SubTitle = styled.h4`
 margin-left: 15px;
 color: #56789a;
 @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Card = styled.div`
  background-color:white;
  padding:20px;
  zoom:1;
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const InputNumber = styled.input`
  padding-left: 10px;
`;

export const DollarIcon = styled.p`
  margin: 38px 3px;
  position: absolute;
`;

export const HiddenPaymentForm = styled.div`
  display: none;
`;

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto 23px auto;
    padding: 0;
    box-shadow: 
       inset 0 -3em 3em rgba(0,0,0,0.1), 
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
    @media screen and (max-width: 600px) {
      max-width: 380px;
      box-shadow:none;
    }
`;

export const InnerContainer = styled.div`
  padding:10px;
`;

export const OptionsSection = styled.div`
 display:flex;
`;

export const CardItem = styled.h3`
    margin: 30px 10px;
    width: 50%;
    text-decoration: underline;
    &:hover{
      cursor: pointer;
      transition: color 0.4s ease-in-out;
      color:#2490ff;
    }
     @media screen and (max-width: 600px) {
      font-size: 12px;
  }
`;



