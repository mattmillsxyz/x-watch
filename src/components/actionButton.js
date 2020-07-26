import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DetailsButton = styled(Link)`
  background: none;
  color: ${(props) => props.theme.linkColor};
  border: 1px solid ${(props) => props.theme.linkColor};
  border-radius: 3px;
  display: inline-block;
  padding: 4px 12px;
  font-size: 1rem;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 600;
`;

const PresskitButton = styled.a`
  background: none;
  color: ${(props) => props.theme.linkColor};
  border: 1px solid ${(props) => props.theme.linkColor};
  border-radius: 3px;
  display: inline-block;
  padding: 4px 12px;
  font-size: 1rem;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 600;
`;

const ActionButton = ({ type, launchData }) => {
  if (type === 'details') {
    if (launchData.links.presskit) {
      return (
        <PresskitButton
          href={launchData.links.presskit}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to flight press kit"
        >
          PRESS KIT
        </PresskitButton>
      );
    } else {
      return <div>Sorry, no press kit available.</div>;
    }
  }
  return (
    <DetailsButton
      to={`/launch/${launchData.flight_number}`}
      aria-label="Go to flight details"
    >
      LAUNCH DETAILS
    </DetailsButton>
  );
};

export default ActionButton;
