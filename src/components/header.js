import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../images/x-watch-logo.svg';
import menuIcon from '../images/menu-icon.svg';

const Wrapper = styled.div`
  margin-bottom: 5rem;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 1.45rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled.button`
  margin-top: 1rem;
  background: 0;
  border: 0;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => (
  <Wrapper>
    <Container>
      <Link to="/" aria-label="Go to X Watch home page">
        <img src={logo} alt="X Watch logo" />
      </Link>
      <MenuButton aria-label="Open navigation menu">
        <img src={menuIcon} alt="Menu icon" />
      </MenuButton>
    </Container>
  </Wrapper>
);

export default Header;
