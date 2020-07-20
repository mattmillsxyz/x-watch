import React from 'react';
import styled from 'styled-components';
import { codes } from 'iso-country-codes';
import Flag from 'react-flagkit';

const Container = styled.div`
  img {
    margin-right: 0.5rem;
    margin-top: 0.35rem;
    height: auto;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
  }
`;

const getCountryCode = (country) => {
  if (country === 'United States') {
    country = 'United States of America';
  }
  const code = codes.find((code) => {
    return code.name.includes(country);
  });
  if (code) {
    return code.alpha2;
  }
  return 'us';
};

const renderFlags = (id, payloads) => {
  return payloads.map((payload, index) => {
    const countryCode = getCountryCode(payload.nationality);
    return (
      <Flag key={`flag--${id}--${index}`} country={countryCode.toUpperCase()} />
    );
  });
};

const Flags = ({ id, payloads }) => {
  return <Container>{renderFlags(id, payloads)}</Container>;
};

export default Flags;
