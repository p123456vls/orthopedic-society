import styled from 'styled-components';

export const Input = styled.input`
   width: 100%;
   margin: 20px 0 20px;
   border-width: 0 0 0.5px 0;
   border-style: solid;
`;

export const Title = styled.h2`
  width:100%;
  color:#345170;
`;
export const Label = styled.h4`
   margin-bottom: ${props=>props.margin?'20px':0} 
`;
