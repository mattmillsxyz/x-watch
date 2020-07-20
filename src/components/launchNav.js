import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 1rem 0;

  a {
    font-weight: 600;
    padding: 0 5%;

    div {
      white-space: nowrap;
    }
  }
`;

const renderNavLinks = (flightNumber, allFlightNumbers) => {
  // TODO: Make this better
  const prevPage = flightNumber - 1;
  const nextPage = flightNumber + 1;

  return (
    <>
      {allFlightNumbers.includes(prevPage) ? (
        <Link
          to={`/launch/${prevPage}`}
          aria-label={`Go to flight number ${prevPage} details`}
        >
          <div>&laquo; PREVIOUS</div>
        </Link>
      ) : (
        <div></div>
      )}
      {allFlightNumbers.includes(nextPage) ? (
        <Link
          to={`/launch/${nextPage}`}
          aria-label={`Go to flight number ${nextPage} details`}
        >
          <div>NEXT &raquo;</div>
        </Link>
      ) : (
        <div></div>
      )}
    </>
  );
};

const LaunchNav = ({ flightNumber, allFlightNumbers }) => (
  <Wrapper>{renderNavLinks(flightNumber, allFlightNumbers)}</Wrapper>
);

export default LaunchNav;
