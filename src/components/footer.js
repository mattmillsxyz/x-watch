import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  padding: 1rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </StyledFooter>
  );
};

export default Footer;
