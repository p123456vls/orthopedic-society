import React from 'react';
import {Container, Spacer} from "./footer.styles";

const Footer = () => {
  return (
    <>
      <Spacer/>
      <Container>
        &#169; {new Date().getFullYear()} Hellenic American Hippocratic Orthopaedic Society
      </Container>
    </>
  );
};

export default Footer;