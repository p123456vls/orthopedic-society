import styled from 'styled-components';

export const imageContainer = {
  width: '100%',
  maxWidth: 600,
  height: 'auto',
  margin: 'auto'
}

export const ImgLabel = styled.div`
    width: 156px;
    height: 23px;
    background-color: transparent;
    color: #fdfcfb;
    text-align: center;
    position: absolute;
    margin-top: -23px;
    opacity: 0.7;
`;

export const MainSection = styled.div`
 padding-top:20px;
 max-width: 600px; 
 margin: auto;
`;

export const Wrapper = styled.div`
  margin-left : 10px;
`;

export const HeaderTitle = styled.h2`
   text-align: ${props => (props.align)};
   color: ${props => (props.white ? 'white' : 'black')};
`;

export const Row = styled.div`
   max-width:800px;
   margin: auto;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const H3White = styled.h3`
 color: white;
`;

export const Paragraph = styled.p`
  margin: 20px 0 20px 0;

@media screen and (max-width: 600px) {
   font-size:12px ;
}
`;

export const Column = styled.div`
  float: left;
  width: 50%;
  padding: 20px;
  height: 300px; 
  background-color: ${props => (props.backgroundClr)};
  //  box-shadow:
  //0 2.8px 1.2px rgba(0, 0, 0, 0.034),
  //0 3.7px 2.3px rgba(0, 0, 0, 0.048),
  //0 5.5px 5px rgba(0, 0, 0, 0.06),
  //0 12.3px 8.9px rgba(0, 0, 0, 0.072),
  //0 20.8px 16.4px rgba(0, 0, 0, 0.086),
  //0 50px 40px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  
  @media screen and (max-width: 750px) {
    width: 100%;
    }
`;