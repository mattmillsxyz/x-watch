import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
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

const renderPrevious = (flightNumber, pages) => {
  // TODO: Make this better
  let pageArr = [];
  pages.forEach(page => {
    if (page.node.flight_number != null) {
      pageArr.push(page.node.flight_number);
    }
  });

  if (pageArr.includes(flightNumber - 1)) {
    return (
      <Link
        to={`/launch/${flightNumber - 1}`}
        aria-label={`Go to flight number ${flightNumber - 1} details`}
      >
        &laquo; PREVIOUS
      </Link>
    );
  }
  return <div />;
};

const renderNext = (flightNumber, pages) => {
  // TODO: Make this better
  let pageArr = [];
  pages.forEach(page => {
    if (page.node.flight_number != null) {
      pageArr.push(page.node.flight_number);
    }
  });

  if (pageArr.includes(flightNumber + 1)) {
    return (
      <Link
        to={`/launch/${flightNumber + 1}`}
        aria-label={`Go to flight number ${flightNumber + 1} details`}
      >
        NEXT &raquo;
      </Link>
    );
  }
  return <div />;
};

const LaunchNav = ({ flightNumber }) => (
  <StaticQuery
    query={allPages}
    render={data => (
      <Wrapper>
        {renderPrevious(flightNumber, data.allInternalPastLaunches.edges)}
        {renderNext(flightNumber, data.allInternalPastLaunches.edges)}
      </Wrapper>
    )}
  />
);

const allPages = graphql`
  {
    allInternalPastLaunches {
      edges {
        node {
          flight_number
        }
      }
    }
  }
`;

export default LaunchNav;
