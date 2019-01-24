import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import GatsbyIcon from '../images/gatsby-icon.png';
import ReactIcon from '../images/react-logo.png';
import StyledComponentsIcon from '../images/styled-components-logo.png';

const Wrapper = styled.div`
  padding: 2rem 5% 0;
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 4rem;
  margin-top: 1.5rem;

  @media (max-width: 740px) {
    flex-direction: column-reverse;
  }
`;

const DetailsWrapper = styled.div`
  width: 40%;
  margin-bottom: 1.5rem;

  @media (max-width: 740px) {
    width: 100%;
  }
`;

const Story = styled.div`
  width: 60%;
  padding-right: 4rem;

  p {
    margin-top: 0.5rem;
  }

  @media (max-width: 740px) {
    width: 100%;
    padding-right: 0;
  }
`;

const DetailsContainer = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.heroColor};

  @media (max-width: 740px) {
    padding: 1.5rem 5%;
  }
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const Heading = styled.div`
  font-weight: 600;
  width: 50%;
`;

const Detail = styled.div`
  text-align: right;
  width: 50%;

  img {
    height: 2.5rem;
    margin-left: 0.5rem;
  }
`;

const Disclaimer = styled.h4`
  margin-bottom: 1.5rem;
`;

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About X-Watch" />
      <Wrapper>
        <h1>About X-Watch</h1>
        <Container>
          <Story>
            <h3>WHAT</h3>
            <p>
              X-Watch is an open source application for viewing data about
              upcoming and previous SpaceX launches. It includes a countdown
              timer that displays the time until the next launch, and launch
              details (launch data, photos, and links to media) about each
              previous launch.
            </p>

            <h3>WHY</h3>
            <p>
              I believe the work SpaceX is doing to advance our species is very
              important. We have long dreamed of expanding the possibilities of
              life outside of our planet, and Elon Musk is taking that dream and
              running with it. This application, is a small window into the
              steps that have been taken so far. Hopefully, to help us inspire
              future generations to dream about space travel.
            </p>

            <h3>HOW</h3>
            <p>
              The data found here is sourced from the SpaceX-API. The
              application is built using Gatbsy JS, React JS, and Styled
              Components. If you are interested in seeing the source code and/or
              contributing to this project, check out{' '}
              <a
                href="https://github.com/mattmillsxyz/x-watch"
                aria-label="Go to the X-Watch source code on GitHub"
              >
                X-Watch on GitHub
              </a>
              .
            </p>

            <h3>WHO</h3>
            <p>
              This application was developed by Matt Mills, a software engineer,
              designer, and artist from Austin, Texas. Special thanks to{' '}
              <a
                href="https://github.com/jakewmeyer"
                aria-label="Go to Jake Meyer on GitHub"
              >
                Jake Meyer
              </a>{' '}
              and the maintainers of the SpaceX-API. Without their efforts, this
              application would probably not exist.
            </p>
          </Story>
          <DetailsWrapper>
            <Disclaimer>
              DISCLAIMER: The creator and maintainer of this website has no
              affiliation with{' '}
              <a
                href="https://www.spacex.com/"
                aria-label="Go to SpaceX website"
              >
                SpaceX
              </a>
              . The content herein should be considered for educational purposes
              only.
            </Disclaimer>
            <DetailsContainer>
              <Details>
                <Heading>Created by:</Heading>
                <Detail>
                  <a
                    href="https://mattmills.xyz"
                    aria-label="Go to Matt Mills' website"
                  >
                    Matt Mills
                  </a>
                </Detail>
              </Details>
              <Details>
                <Heading>Data provided by:</Heading>
                <Detail>
                  <a
                    href="https://github.com/r-spacex/SpaceX-API"
                    aria-label="Go to the SpaceX-API on GitHub"
                  >
                    SpaceX-API
                  </a>
                </Detail>
              </Details>
              <Details>
                <Heading>Technologies:</Heading>
                <Detail>
                  <a
                    href="https://www.gatsbyjs.org/"
                    aria-label="Go to the Gatsby JS website"
                    title="Gatsby JS"
                  >
                    <img src={GatsbyIcon} alt="Gatsby JS logo" />
                  </a>
                  <a
                    href="https://reactjs.org/"
                    aria-label="Go to the React JS website"
                    title="React JS"
                  >
                    <img src={ReactIcon} alt="React JS logo" />
                  </a>
                  <a
                    href="https://www.styled-components.com/"
                    aria-label="Go to the Styled Components website"
                    title="Styled Components"
                  >
                    <img
                      src={StyledComponentsIcon}
                      alt="Styled Components logo"
                    />
                  </a>
                </Detail>
              </Details>
            </DetailsContainer>
          </DetailsWrapper>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default AboutPage;
