import React from 'react';
import styled from 'styled-components';
import { codes } from 'iso-country-codes';
import ReactCountryFlag from 'react-country-flag';
import { find } from 'lodash';

const Container = styled.div`
  span {
    font-size: 1.75rem;
    margin-right: 0.5rem;
  }
`;

const getCountryCode = country => {
  if (country === 'United States') {
    country = 'United States of America';
  }
  const code = find(codes, o => {
    return o.name.includes(country);
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
      <ReactCountryFlag
        styleProps={{ cursor: 'default' }}
        key={`flag--${id}--${index}`}
        code={countryCode}
      />
    );
  });
};

const Flags = ({ id, payloads }) => {
  return <Container>{renderFlags(id, payloads)}</Container>;
};

export default Flags;
