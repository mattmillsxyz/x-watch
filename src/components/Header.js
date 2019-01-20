import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../images/x-watch-logo.svg';
import MobileMenu from './MobileMenu';

const Wrapper = styled.div`
  margin-bottom: 5rem;
  background: white;
  width: 100%;
  margin-bottom: 1rem;
  position: fixed;
  top: 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  z-index: 100;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 1.45rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 740px) {
    padding: 1rem 5%;
  }
`;

const Title = styled.div`
  flex: 1;
  font-size: 1.25rem;
  margin-left: 1rem;
  margin-top: 1.7rem;
  color: #333333;

  @media (max-width: 740px) {
    margin-left: 0;
    margin-top: 0.5rem;
    font-size: 1rem;
    display: none;
  }
`;

const NavWrapper = styled.div`
  margin-top: 1.5rem;

  @media (max-width: 740px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-weight: 600;
  &:not(:last-child) {
    margin-right: 1.5rem;
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

const renderMobileMenu = props => {
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
        <Title>An Unoffical SpaceX Launch Tracker</Title>
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
