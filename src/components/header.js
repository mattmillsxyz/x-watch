import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../images/x-watch-logo.svg';
import MobileMenu from './mobileMenu';

const Wrapper = styled.div`
  margin-bottom: 5rem;
  background: ${(props) => props.theme.headerBackgroundColor};
  width: 100%;
  margin-bottom: 1rem;
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  @media (min-width: 1681px) {
    max-width: 1400px;
  }
  @media (max-width: 740px) {
    padding: 1rem 5%;
  }
`;

const NavWrapper = styled.div`
  margin-top: 1.25rem;
  @media (max-width: 740px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-weight: 400;
  color: white;
  text-decoration: none;
  &:visited {
    color: white;
  }
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  @media (max-width: 740px) {
    flex-direction: column;
    img {
      width: 100px;
    }
  }
`;

const renderMobileMenu = (props) => {
  return (
    <MobileMenu>
      <Link to="/" aria-label="Go to X-Watch home page">
        HOME
      </Link>
      <Link to="/launches" aria-label="Go to previous launches page">
        LAUNCHES
      </Link>
      <Link to="/about" aria-label="Go to the about page">
        ABOUT
      </Link>
    </MobileMenu>
  );
};

const Header = () => (
  <Wrapper>
    <Container>
      <LogoWrapper>
        <Link to="/" aria-label="Go to X-Watch home page">
          <img src={logo} alt="X-Watch logo" />
        </Link>
      </LogoWrapper>
      {renderMobileMenu()}
      <NavWrapper>
        <NavLink to="/" aria-label="Go to X-Watch home page">
          HOME
        </NavLink>
        <NavLink to="/launches" aria-label="Go to previous launches page">
          LAUNCHES
        </NavLink>
        <NavLink to="/about" aria-label="Go to the about page">
          ABOUT
        </NavLink>
      </NavWrapper>
    </Container>
  </Wrapper>
);

export default Header;
