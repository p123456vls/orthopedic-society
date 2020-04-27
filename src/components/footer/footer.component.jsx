import React from 'react';
import {Container, Spacer} from "./footer.styles";

const Footer = () => {
  return (
    <>
      <Spacer/>
      <Container>
        &#169; {new Date().getFullYear()} Hippocratic Orthopaedic Society, Inc
      </Container>
    </>
  );
};

export default Footer;