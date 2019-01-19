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

const Title = styled.div`
  flex: 1;
  margin-left: 1rem;
  margin-top: 1.5rem;
  color: #333333;
`;

const Header = () => (
  <Wrapper>
    <Container>
      <Link to="/" aria-label="Go to X Watch home page">
        <img src={logo} alt="X Watch logo" />
      </Link>
      <Title>The Unoffical SpaceX Launch Tracker</Title>
      {/* <MenuButton aria-label="Open navigation menu">
        <img src={menuIcon} alt="Menu icon" />
      </MenuButton> */}
      <div style={{ marginTop: '1.5rem' }}>
        <Link
          to="/"
          aria-label="Go to X Watch home page"
          style={{ marginRight: '1.5rem', fontWeight: 600 }}
        >
          HOME
        </Link>
        <Link
          to="/launches"
          aria-label="Go to previous launches page"
          style={{ fontWeight: 600 }}
        >
          PREVIOUS LAUNCHES
        </Link>
      </div>
    </Container>
  </Wrapper>
);

export default Header;
