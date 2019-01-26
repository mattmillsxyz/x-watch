import React, { useState } from 'react';
import styled from 'styled-components';

import CloseIcon from '../images/close-icon.svg';

const Menu = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 240px;
  background-color: black;
  padding: 6rem 2rem;
  transition: all 0.25s ease-in-out;
  display: flex;
  flex-direction: column;

  a {
    font-size: 1.25rem;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    text-decoration: none;
  }
`;

const MenuButton = styled.button`
  position: fixed;
  top: 1.85rem;
  right: 5%;
  background: 0;
  border: 0;
  cursor: pointer;
  padding: 8px;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  color: white;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.85rem;
  right: 1.75rem;
  background: 0;
  border: 0;
  cursor: pointer;
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

const MenuWrapper = styled.div`
  display: none;

  @media (max-width: 740px) {
    display: block;
  }
`;

const MobileMenu = props => {
  const [open, setOpen] = useState(false);

  return (
    <MenuWrapper>
      <MenuButton onClick={() => setOpen(!open)}>MENU</MenuButton>
      <Menu style={{ right: open ? 0 : '-320px' }}>
        <CloseButton onClick={() => setOpen(!open)}>
          <img src={CloseIcon} alt="Close menu" />
        </CloseButton>
        {props.children}
      </Menu>
    </MenuWrapper>
  );
};

export default MobileMenu;
