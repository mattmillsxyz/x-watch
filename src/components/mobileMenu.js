import React, { useState } from 'react';
import styled from 'styled-components';

import CloseIcon from '../images/close-icon.svg';
import Logo from '../images/x-watch-logo.svg';

const Menu = styled.div`
  position: fixed;
  top: 0;
  height: calc(100vh - 4rem);
  width: 240px;
  background-color: #111111;
  padding: 2rem;
  transition: all 0.25s ease-in-out;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 10px 0 rgba(0, 0, 0, 0.5);
  a {
    font-size: 1.25rem;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    text-decoration: none;
  }
`;

const MenuButton = styled.button`
  position: fixed;
  top: 30px;
  right: 5%;
  background: 0;
  border: 0;
  cursor: pointer;
  padding: 8px;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  color: white;
  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: white;
    &:not(:last-child) {
      margin-bottom: 6px;
    }
  }
`;

const CloseButton = styled.button`
  background: 0;
  border: 0;
  cursor: pointer;
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  span {
    font-size: 2rem;
    color: white;
  }
`;

const MenuWrapper = styled.div`
  display: none;
  @media (max-width: 740px) {
    display: block;
  }
`;

const MenuFooter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  img {
    width: 80px;
  }
`;

const MobileMenu = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <MenuWrapper>
      <MenuButton onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      <Menu style={{ right: open ? 0 : '-320px' }}>
        <MenuHeader>
          <span>MENU</span>
          <CloseButton onClick={() => setOpen(!open)}>
            <img src={CloseIcon} alt="Close menu" />
          </CloseButton>
        </MenuHeader>
        {props.children}
        <MenuFooter>
          <img src={Logo} alt="X-Watch logo" />
        </MenuFooter>
      </Menu>
    </MenuWrapper>
  );
};

export default MobileMenu;
