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
  font-size: 1.25rem;
  margin-left: 1rem;
  margin-top: 1.23rem;
  color: #333333;
`;

const NavLink = styled(Link)`
  font-weight: 600;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const Header = () => (
  <Wrapper>
    <Container>
      <Link to="/" aria-label="Go to X Watch home page">
        <img src={logo} alt="X Watch logo" />
      </Link>
      <Title>An Unoffical SpaceX Launch Tracker</Title>
      {/* <MenuButton aria-label="Open navigation menu">
        <img src={menuIcon} alt="Menu icon" />
      </MenuButton> */}
      <div style={{ marginTop: '1.5rem' }}>
        <NavLink to="/" aria-label="Go to X Watch home page">
          HOME
        </NavLink>
        <NavLink to="/launches" aria-label="Go to previous launches page">
          LAUNCHES
        </NavLink>
        <NavLink to="/about" aria-label="Go to the about page">
          ABOUT
        </NavLink>
      </div>
    </Container>
  </Wrapper>
);

export default Header;
