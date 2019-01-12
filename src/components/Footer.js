import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  padding: 1rem 0;
  font-size: 0.875rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      A project by{' '}
      <a href="https://mattmills.xyz" aria-label="Go to Matt Mills' website">
        Matt Mills
      </a>{' '}
      using the
      {` `}
      <a
        href="https://github.com/r-spacex/SpaceX-API"
        aria-label="Go to SpaceX API"
      >
        SpaceX-API
      </a>
      .
    </StyledFooter>
  );
};

export default Footer;
