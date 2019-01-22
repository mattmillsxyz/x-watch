import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 1rem 0;

  a {
    font-weight: 600;
    padding: 0 5%;

    div {
      white-space: nowrap;
    }
  }
`;

const renderNavLink = (direction, flightNumber, pages) => {
  // TODO: Make this better
  const toLaunch = direction === 'prev' ? flightNumber - 1 : flightNumber + 1;
  let pageArr = [];
  pages.forEach(page => {
    if (page.node.flight_number != null) {
      pageArr.push(page.node.flight_number);
    }
  });

  if (pageArr.includes(toLaunch)) {
    return (
      <Link
        to={`/launch/${toLaunch}`}
        aria-label={`Go to flight number ${toLaunch} details`}
      >
        {direction === 'prev' ? (
          <div>&laquo; PREVIOUS</div>
        ) : (
          <div>NEXT &raquo;</div>
        )}
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
        {renderNavLink(
          'prev',
          flightNumber,
          data.allInternalPastLaunches.edges
        )}
        {renderNavLink(
          'next',
          flightNumber,
          data.allInternalPastLaunches.edges
        )}
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
