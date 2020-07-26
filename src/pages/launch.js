import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { useFetch } from '../hooks/useFetch';
import Layout from '../components/layout';
import Launch from '../components/launch';
import LaunchNav from '../components/launchNav';
import RocketDetails from '../components/rocketDetails';
import Images from '../components/images';
import MediaLinks from '../components/mediaLinks';

const Error = styled.div`
  margin: 0 auto;
  padding: 100px 50px;
  font-size: 1.5rem;
  background-color: #111111;
  border-radius: 4px;
`;

const LaunchPage = (props) => {
  let { id } = useParams();
  const url = `https://api.spacexdata.com/v3/launches/past?order=desc`;

  const { status, data } = useFetch(url);

  if (data) {
    const currentLaunchData = data.find(
      (launch) => launch.flight_number.toString() === id
    );
    const allFlightNumbers = data.map((launch) => launch.flight_number);
    return (
      <Layout>
        {status === 'fetched' && (
          <>
            <LaunchNav
              flightNumber={currentLaunchData.flight_number}
              allFlightNumbers={allFlightNumbers}
            />
            <Launch
              heading="LAUNCH DETAILS"
              launchData={currentLaunchData}
              type="details"
            />
            <RocketDetails rocketData={currentLaunchData.rocket} />
            <Images imageData={currentLaunchData.links.flickr_images} />
            <MediaLinks links={currentLaunchData.links} />
          </>
        )}
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Error>Sorry, could not get launch details.</Error>
      </Layout>
    );
  }
};

export default LaunchPage;
