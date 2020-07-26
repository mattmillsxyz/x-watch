import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

let timer;

const TimerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 100%;
    text {
      fill: ${(props) => props.theme.linkColor};
    }
  }
`;

const TimeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.span`
  font-size: 2rem;
`;

const UnitWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    margin-top: 0.8rem;
  }
`;

const Unit = styled.div`
  color: gray;
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Timer = ({ launchDate }) => {
  useEffect(() => {
    const getLaunchTime = () => {
      const now = moment();
      const liftoff = moment(launchDate);
      const diff = liftoff.diff(now);
      const diffDuration = moment.duration(diff);

      setCurrTime({
        days: diffDuration.days().toString().padStart(2, '0'),
        hours: diffDuration.hours().toString().padStart(2, '0'),
        minutes: diffDuration.minutes().toString().padStart(2, '0'),
        seconds: diffDuration.seconds().toString().padStart(2, '0'),
      });
    };

    timer = setInterval(() => getLaunchTime(), 1000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', () => {});
    };
  }, [launchDate]);

  const initialTime = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  };
  const [currTime, setCurrTime] = useState(initialTime);

  return (
    <>
      <TimerWrapper>
        <TimeBlock>
          <svg viewBox="0 0 18 12">
            <text
              style={{ fontFamily: 'Rajdhani' }}
              x="50%"
              y="12"
              textAnchor="middle"
            >
              {currTime.days}
            </text>
          </svg>
        </TimeBlock>
        <Divider>:</Divider>
        <TimeBlock>
          <svg viewBox="0 0 18 12">
            <text
              style={{ fontFamily: 'Rajdhani' }}
              x="50%"
              y="12"
              textAnchor="middle"
            >
              {currTime.hours}
            </text>
          </svg>
        </TimeBlock>
        <Divider>:</Divider>
        <TimeBlock>
          <svg viewBox="0 0 18 12">
            <text
              style={{ fontFamily: 'Rajdhani' }}
              x="50%"
              y="12"
              textAnchor="middle"
            >
              {currTime.minutes}
            </text>
          </svg>
        </TimeBlock>
        <Divider>:</Divider>
        <TimeBlock>
          <svg viewBox="0 0 18 12">
            <text
              style={{ fontFamily: 'Rajdhani' }}
              x="50%"
              y="12"
              textAnchor="middle"
            >
              {currTime.seconds}
            </text>
          </svg>
        </TimeBlock>
      </TimerWrapper>
      <UnitWrapper>
        <Unit>DAYS</Unit>
        <Unit>HOURS</Unit>
        <Unit>MINUTES</Unit>
        <Unit>SECONDS</Unit>
      </UnitWrapper>
    </>
  );
};

export default Timer;
