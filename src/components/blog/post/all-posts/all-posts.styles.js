import styled from 'styled-components'
import {Colors} from "../../../../constants/colors";


export const CardTitleContainer = styled.div`
  height:57px;
  border: solid 1px #e8e8e8;
  border-radius: 2px;
  padding: 8px 24px;
  margin-top: ${props => props.margin ? `20px` : 0};
  clear:both;
    @media screen and (max-width: 600px) {
     padding: 2px;
  }
`;

export const CartTitleLeftSection = styled.div`
  float: left;
`;
export const CartTitleRightSection = styled.div`
  float: right;
  display: flex;
`;

export const CommentsTitle = styled.h4`
  border-top: solid 1px #eaeaea; 
  margin-top: 10px;
`

export const CardTitle = styled.h3`
  margin-bottom: -2px;
  margin-top:-3px
`;

export const DescriptionDiv = styled.h3`
    margin-top: 16px;
`;

export const CardBody = styled.div`
   padding: 24px;
   border: solid 1px #e8e8e8;
   border-radius: 2px;
   border-top: none;
   border-bottom: none;
   cursor:${props => props.pointer ? 'pointer' : 'default'};
   color:#5a5656;
  
  @media screen and (max-width: 600px) {
     padding: 2px;
  }
`;

export const CardFooter = styled.div`
  height:50px;
  border: solid 1px #e8e8e8;
  padding: 13px 24px;
  margin-bottom:10px;
  border-radius: 0 0 2px 2px;
  
   @media screen and (max-width: 600px) {
     padding: 14px;
  }
`;

export const CardFooterContainer = styled.div`
  clear:both;
  width:100%;
`;

export const CardMainImage = styled.div`
   padding-bottom: 10px;
   cursor: ${props=>props.expand? 'nesw-resize':'cursor'}
`;

export const CardSmallImages = styled.div`
 display: flex;
 flex-wrap: wrap;
`;

export const ImgIcon = styled.img`
  width:20px;
  height: 20px;
`;

export const CommentsLink = styled.div`
  float:left;
  cursor:pointer;
    &:hover{
      color:#bfc3cb;
      transition: all 0.3s;
  }
`;

export const ReplyLink = styled.div`
  float:right;
  cursor:pointer;
  color: #2490ff;
    &:hover{
      color:rgba(36,144,255,0.75);
      transition: all 0.3s;
   }
`;

export const LoadingPosts = styled.div`
   height: 50%;
   margin: 41% 0 0 41% ;
   font-size: large;
`;

export const IconDiv = styled.div`
  margin: 0 0 5px;
`;

export const CommentSpan = styled.div`
  background-color: rgba(241,241,241,0.97);
  padding: 5px;
  border-radius: 8px;
  clear: left;
`;

export const badge = {
  bottom: 11,
  right: 2
}
export const mask = {
  backgroundColor: '#00000094'
}

export const loadingStyle = {
  color: Colors.primary,
  size: '40px'
}

export const editStyle = {
  color: 'orange',
  size: '20px',
  cursor: 'pointer'
}

export const deleteStyle = {
  color: 'red',
  size: '20px',
  margin: '0 10px',
  cursor: 'pointer'
}