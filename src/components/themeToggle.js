import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  width: 100%;
  margin: 1rem auto 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    font-size: 0.75rem;
    margin-right: 0.5rem;
  }
`;

const Toggle = styled.button`
  text-transform: uppercase;
  border-radius: 0;
  background: none;
  color: ${props => props.theme.linkColor};
  cursor: pointer;
  border: 1px solid ${props => props.theme.linkColor};
`;

const ThemeToggle = ({ theme, onToggleClick }) => {
  return (
    <ToggleContainer>
      <span>MODE: </span>
      <Toggle onClick={() => onToggleClick()}>{theme}</Toggle>
    </ToggleContainer>
  );
};

export default ThemeToggle;
