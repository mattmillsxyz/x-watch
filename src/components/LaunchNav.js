import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  a {
    font-weight: 600;
  }
`;

const LaunchNav = ({ flightNumber }) => {
  return (
    <Wrapper>
      <Link
        to={`/launch/${flightNumber - 1}`}
        aria-label={`Go to flight number ${flightNumber - 1} details`}
      >
        &laquo; PREVIOUS
      </Link>
      <Link
        to={`/launch/${flightNumber + 1}`}
        aria-label={`Go to flight number ${flightNumber + 1} details`}
      >
        NEXT &raquo;
      </Link>
    </Wrapper>
  );
};

export default LaunchNav;
