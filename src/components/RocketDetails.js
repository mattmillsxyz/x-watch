import React from 'react';
import styled from 'styled-components';

import Flags from './Flags';

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h5`
  margin-left: 5%;
  margin-top: 3rem;
`;

const Container = styled.div`
  padding: 2rem 5% 3rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

const RocketName = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const Stage = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  width: 25%;

  &:last-child {
    width: 30%;
  }

  @media (max-width: 740px) {
    width: 100%;

    &:last-child {
      width: 100%;
    }

    &:nth-last-child(-n + 2) {
      margin-top: 1rem;
    }
  }
`;

const StageHeading = styled.div`
  font-size: 1.25rem;
  line-height: 1;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

const Detail = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const DetailHeading = styled.span`
  font-weight: 600;
  margin-right: 0.5rem;
`;

const DetailWrapper = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const DetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailNumber = styled.div`
  padding-right: 0.5rem;

  span {
    margin-right: 0;
  }
`;

const Num = styled.div`
  color: ${props => props.theme.sectionHeadingColor};
  font-weight: 600;
  margin-bottom: 0.18rem;
  display: block;
`;

const RocketType = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;

const RocketNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;

  @media (max-width: 740px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const renderCores = cores => {
  return cores.map((core, index) => {
    return (
      <DetailWrapper key={`rocket--core--${core.core_serial}`}>
        <DetailNumber>
          <Num>{(index + 1).toString().padStart(2, '0')}</Num>
        </DetailNumber>
        <DetailsBlock>
          <Detail>
            <DetailHeading>SERIAL #:</DetailHeading>
            {core.core_serial}
          </Detail>
          <Detail>
            <DetailHeading>FLIGHT:</DetailHeading>
            {core.flight}
          </Detail>
          {core.landing_intent && (
            <>
              <Detail>
                <DetailHeading>LANDING TYPE:</DetailHeading>
                {core.landing_type}
              </Detail>
              <Detail>
                <DetailHeading>LANDING VEHICLE:</DetailHeading>
                {core.landing_vehicle}
              </Detail>
              <Detail>
                <DetailHeading>LANDING STATUS:</DetailHeading>
                {core.land_success ? 'SUCCESSFUL' : 'FAILURE'}
              </Detail>
            </>
          )}
        </DetailsBlock>
      </DetailWrapper>
    );
  });
};

const renderPayloadInfo = payloads => {
  return payloads.map((payload, index) => {
    return (
      <DetailWrapper key={`payload--${payload.payload_id}`}>
        <DetailNumber>
          <Num>{(index + 1).toString().padStart(2, '0')}</Num>
          <Flags id={payload.payload_id} payloads={[payload]} />
        </DetailNumber>
        <DetailsBlock>
          <Detail>
            <DetailHeading>ID:</DetailHeading>
            {payload.payload_id}
          </Detail>
          <Detail>
            <DetailHeading>CUSTOMERS:</DetailHeading>
            {payload.customers.join(', ')}
          </Detail>
          <Detail>
            <DetailHeading>TYPE:</DetailHeading>
            {payload.payload_type}
          </Detail>
          <Detail>
            <DetailHeading>MANUFACTURER:</DetailHeading>
            {payload.manufacturer}
          </Detail>
          <Detail>
            <DetailHeading>MASS:</DetailHeading>
            {`${payload.payload_mass_kg}kg`}
          </Detail>
        </DetailsBlock>
      </DetailWrapper>
    );
  });
};

const RocketDetails = ({ rocketData }) => {
  return (
    <Wrapper>
      <Header>
        <Heading>ROCKET DETAILS</Heading>
      </Header>
      <Container>
        <RocketNameWrapper>
          <RocketName>{rocketData.rocket_name}</RocketName>
          <RocketType>{rocketData.rocket_type}</RocketType>
        </RocketNameWrapper>
        <Stage>
          <StageHeading>FIRST STAGE</StageHeading>
          <Detail>
            <DetailHeading>CORES:</DetailHeading>
            {rocketData.first_stage.cores.length}
          </Detail>
          {renderCores(rocketData.first_stage.cores)}
        </Stage>
        <Stage>
          <StageHeading>SECOND STAGE</StageHeading>
          <Detail>
            <DetailHeading>PAYLOADS:</DetailHeading>
            {rocketData.second_stage.payloads.length}
          </Detail>
        </Stage>
        <Stage>
          <StageHeading>PAYLOAD INFO</StageHeading>
          {renderPayloadInfo(rocketData.second_stage.payloads)}
        </Stage>
      </Container>
    </Wrapper>
  );
};

export default RocketDetails;
