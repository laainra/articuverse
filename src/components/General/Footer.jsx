import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2023 Articuverse</FooterText>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #FFE9E9;
  color: #000;
  padding: 10px 0;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 14px;
`;

export default Footer;
