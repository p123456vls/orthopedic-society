import styled from 'styled-components';

export const MenuContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  background-color: #0e243c;
  position: fixed;
  height: 100%;
  width:80px;
  overflow: auto;
  padding:0px;
  
  @media screen and (max-width: 600px) {
    height: 48px;
    width:100%;
    padding-top: 10px;
  }
`;

export const MenuItem = styled.li`
    display: block;
    color: ${props => props.color};
    padding-left: 32px;
    padding-top:10px;
    padding-bottom:10px;
    text-decoration: none;
    cursor:pointer;
    
  @media screen and (max-width: 600px) {
   display: inline-flex;
   padding: 0 3% 0 4.4%;
   }

   @media screen and (min-width: 600px) {
      &:active {
        background-color: #4CAF50;
        color: white;
      }
    
      &:hover:not(.active) {
        background-color:#172c42;
        color: white;
      }
   }
`;

export const SiteContainer = styled.div`
 position: absolute;
 top: 52px
`;

export const ContainerTop = styled.div`
  background-color: #2490ff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display:flex;
  z-index: 1;

`;

export const Header = styled.div`
  width: 100%;
  background-color: #2490ff;
  text-align: center;
  font-size: 35px;
  color:white;
  margin-top: -2px;

 @media screen and (max-width: 651px) {
    font-size: 15px;
    padding-top: 14px;
    margin: 0 0 0 -70px;
    z-index: -1;
  }
`;

export const LogoContainer = styled.span`
  width: 88px;
   padding-top: 3.5px;
   padding-bottom: 3.5px;
   text-align: center;
   cursor: pointer; 
`;
export const SingOutField = styled.span`
  
    color: #fff455;
    width: 80px;
    padding-top: 15px;
    cursor: pointer;
    
    @media screen and (min-width: 600px) {
      display:list-item;
    }
    
    @media screen and (max-width: 600px) {
      padding-top: 33px;
      margin-right: -10px;
      font-size: 12px;
      margin-left: -30%;
    }

`;
