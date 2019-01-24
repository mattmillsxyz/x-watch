import React from 'React';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  max-width: 1100px;
  margin: 1rem auto 0;

  span {
    font-size: 0.75rem;
    margin-right: 0.5rem;
  }
`;

const Toggle = styled.button`
  text-transform: uppercase;
  border-radius: 0;
  background: none;
  color: ${props => props.theme.fontColor};
  cursor: pointer;
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
