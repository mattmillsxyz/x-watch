import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { useFetch } from '../hooks/useFetch';

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h5`
  margin-left: 5%;
  margin-top: 3rem;
`;

const HeadingLinkWrapper = styled.div`
  margin-top: 3rem;
  margin-right: 5%;
`;

const HeadingLink = styled(Link)`
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

const Container = styled.div`
  padding: 2rem 5%;
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 740px) {
    justify-content: flex-start;
  }
`;

const BadgeWrapper = styled.div`
  background-color: ${(props) => props.theme.highlightColor};
  display: flex;
  flex-direction: column;
  padding: 36px;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => props.theme.backgroundColor};
  border-radius: 6px;
  &:hover {
    border-color: #222222;
  }
  @media (max-width: 740px) {
    width: auto;
    flex: 1 0 auto;
  }
`;

const Badge = styled.img`
  height: 80px;
  svg {
    height: 80px;
  }
`;

const LaunchDate = styled.div`
  margin-top: 0.5rem;
`;

const renderBadges = (launches) => {
  return launches
    .sort((a, b) => b.flight_number - a.flight_number)
    .slice(0, 5)
    .map((launch) => {
      return (
        <Link
          to={`/launch/${launch.flight_number}`}
          aria-label={`Go to flight number ${launch.flight_number} details`}
          key={`launch--${launch.flight_number}`}
        >
          <BadgeWrapper key={`badge--${launch.flight_number}`}>
            <Badge
              src={launch.links.patch.small || '/images/space-x-badge.png'}
              alt={`${launch.flight_number} mission patch`}
            />
            <LaunchDate>
              {moment(launch.date_local).format('MM.DD.YYYY')}
            </LaunchDate>
          </BadgeWrapper>
        </Link>
      );
    });
};

const RecentLaunches = () => {
  const url = 'https://api.spacexdata.com/v4/launches/past';

  const { data } = useFetch(url);

  return (
    <Wrapper>
      <Header>
        <Heading>RECENT LAUNCHES</Heading>
        <HeadingLinkWrapper>
          <HeadingLink to="/launches/">VIEW ALL</HeadingLink>
        </HeadingLinkWrapper>
      </Header>
      <Container>
        <BadgeContainer>{renderBadges(data)}</BadgeContainer>
      </Container>
    </Wrapper>
  );
};

export default RecentLaunches;
