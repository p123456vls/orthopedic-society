import styled from 'styled-components';

export const Button = styled.button`
    background-color: #0000008c;
    cursor: pointer;
    color: white;
    position: absolute;
    z-index: 1;
    border:none;
    padding: 5px 16px;
    visibility: ${props => props};
`;

export const Container = styled.div`
  margin: auto;
  max-width: 500px;
  border-bottom: solid 1px #e8e8e8;
  
`;
export const LoadingPost = styled.div`
   height: 50%;
   margin: 22% 0 0 44% ;
   font-size: large;
`;