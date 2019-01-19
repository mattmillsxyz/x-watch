import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import GatsbyIcon from '../images/gatsby-icon.png';
import ReactIcon from '../images/react-logo.png';

const Container = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

const DetailsWrapper = styled.div`
  width: 40%;
`;

const Story = styled.div`
  width: 60%;
  padding-right: 4rem;
`;

const DetailsContainer = styled.div`
  padding: 2rem;
  background-color: #f4f4f4;
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
  margin-top: 0.8rem;
  margin-bottom: 1.5rem;
`;

const DetailsFooter = styled.div`
  margin-top: 1.5rem;
`;

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About X Watch" />
      <h1>About X Watch</h1>
      <Container>
        <Story>
          <p>
            {`Yeah, this website is dedicated. To all the teachers that told me
            I'd never amount to nothin'. To all the people that lived above the
            buildings that I was codin' in front of. Called the police on me
            when I was just tryin' to make some money to feed my daughter (it's
            all good). And all the homies in the struggle. You know what I'm
            sayin'? It's all good, baby baby.`}
          </p>
          <p>
            {`It was all a dream, I used to read Air & Space magazine. Elon Musk
            and Jim Cantrell up in the limousine. Hangin' pictures on my wall.
            Every Saturday Falcon 9, Falcon Heavy, Dragon. I let my engine rock
            'til my engine popped. Smokin' pads in Vandenberg, sippin' on rocket
            fuel. Way back, when I had the orange and black space suit. With the
            helmet to match. Remember Yuri Gagarin? Duh-ha, duh-ha. You never
            thought that building rockets would take it this far. Now I'm in the
            limelight 'cause I code tight. Time to get paid, blow up like the
            interstage. Born winner, the opposite of a sinner. Remember when I
            used to eat sardines for dinner. Peace to Alan Shep, Neil A, Big
            Buzz. Flightmaster Griss, Cap'n Conrad. I'm blowin' up like you
            thought I would. Call the crib, same number, same hood. It's all
            good (It's all good). And if you don't know, now you know, Jeffrey.`}
          </p>
          <p>
            {`You know very well. Who you are. Don't let 'em hold you down. Reach
            for the stars. You had a goal. But not that many. 'Cause you're the
            only one. I'll give you good and plenty.`}
          </p>
          <p>
            {`I made the change from a common kid. To up close and personal with
            Robin Leach. And I'm far from cheap. I pop rockets with my peeps all
            day. Spread love, it's the Austin way. The coffee and RedBull keep
            me wizzy. Girls used to diss me. Now they in my DMs 'cause they miss
            me. I never thought it could happen, this coding stuff. I was too
            used to packin' gats and stuff. Now honeys play me close like butter
            play toast. From the Mississippi down to the East Coast. Condos in
            the Cape, payloads for weeks. Sold-out seats to hear Matty M speak.
            Livin' life without fear. Puttin' five karats in my baby girl's ear.
            Lunches, brunches, interviews by the pool. Considered a fool 'cause
            I dropped out of grad school. Stereotypes of a white male
            misunderstood. And it's still all good. And if you don't know, now
            you know, Larry.`}
          </p>
          <p>
            {`You know very well. Who you are. Don't let 'em hold you down. Reach
            for the stars. You had a goal. But not that many. 'Cause you're the
            only one. I'll give you good and plenty.`}
          </p>
          <p>
            {`Super Nintendo, Sega Genesis. When I was dead broke, man, I couldn't
            picture this. 50-inch screen, money-green leather sofa. Got two
            rides, an Uber with a driver. Phone bill about two G's flat. No need
            to worry, my accountant handles that. And my whole crew is loungin'.
            Celebratin' every day, no more public housin'. Thinkin' back on my
            one-room shack. Now my mom pimps a Hond' with cotton on her back.
            And she loves to show me off of course. Smiles every time my face is
            up in the 'gram. We used to fuss when the landlord dissed us. No
            heat, wonder why Christmas missed us. Birthdays was the worst days.
            Now we sip Topo when we thirsty. Uh, damn right, I like the life I
            live. 'Cause I went from negative to positive. And it's all (It's
            all good, Richy B). And if you don't know, now you know, Charlie B.`}
          </p>
          <p>
            {`You know very well. Who you are. Don't let 'em hold you down. And if
            you don't know, now you know, Serg. Reach for the stars. You had a
            goal. But not that many. 'Cause you're the only one. And if you
            don't know, now you know, Kimbal. I'll give you good and plenty.`}
          </p>
          <p>
            {`Representin' A-Town in the house. XYZ Mafia, mad flavor. Uh, uh,
            yeah, aight.`}
          </p>
          <p>
            {`You know very well. Who you are. Don't let 'em hold you down. Reach
            for the stars. You had a goal. But not that many. 'Cause you're the
            only one. I'll give you good and plenty.`}
          </p>
          <p>
            {`Matty M, it's all good, homie. Elon, it's all good, homie. Stevie J,
            it's all good, homie. It's all good. That's right, '19. And on and
            on, and on and on. You know very well. Who you are. Don't let 'em
            hold you down. Reach for the stars.`}
          </p>
        </Story>
        <DetailsWrapper>
          <Disclaimer>
            DISCLAIMER: The creator and maintainer of this website has no
            affiliation with{' '}
            <a href="https://www.spacex.com/" aria-label="Go to SpaceX website">
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
              </Detail>
            </Details>
          </DetailsContainer>
          <DetailsFooter>
            <p>
              If you're interested in seeing the source code and/or contributing
              to this project, check out{' '}
              <a
                href="https://github.com/mattmillsxyz/x-watch"
                aria-label="Go to the X Watch source code on GitHub"
              >
                x-watch on GitHub
              </a>
              .
            </p>
            <p>
              Special thanks to{' '}
              <a
                href="https://github.com/jakewmeyer"
                aria-label="Go to Jake Meyer on GitHub"
              >
                Jake Meyer
              </a>{' '}
              for his contributions to the SpaceX-API. Without his efforts, this
              application would probably not exist.
            </p>
          </DetailsFooter>
        </DetailsWrapper>
      </Container>
    </Layout>
  );
};

export default AboutPage;
