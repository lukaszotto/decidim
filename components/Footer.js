import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <ContainerWrapper>
        <img src="/images/decidim-logo.svg" alt="decidim logo"></img>
      </ContainerWrapper>
    </StyledFooter>
  );
};
export default Footer;

const StyledFooter = styled.div`
  padding: 2rem 0 1.5rem;
  background-color: #2c2930;
  color: #e8e8e8;
  text-align: right;
`;

const ContainerWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 21px;
`;
