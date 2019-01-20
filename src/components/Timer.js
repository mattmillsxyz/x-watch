import React from 'react';
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
      fill: #ff006b;
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

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
      launchDate: props.launchDate,
    };
  }

  componentDidMount() {
    timer = setInterval(() => this.getLaunchTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

  getLaunchTime() {
    const now = moment();
    const nowUtc = now.utc();
    const liftoff = moment(this.state.launchDate);
    const diff = liftoff.diff(nowUtc);
    const diffDuration = moment.duration(diff);

    this.setState({
      days: diffDuration
        .days()
        .toString()
        .padStart(2, '0'),
      hours: diffDuration
        .hours()
        .toString()
        .padStart(2, '0'),
      minutes: diffDuration
        .minutes()
        .toString()
        .padStart(2, '0'),
      seconds: diffDuration
        .seconds()
        .toString()
        .padStart(2, '0'),
    });
  }

  render() {
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
                {this.state.days ? this.state.days : '00'}
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
                {this.state.hours ? this.state.hours : '00'}
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
                {this.state.minutes ? this.state.minutes : '00'}
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
                {this.state.seconds ? this.state.seconds : '00'}
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
  }
}

export default Timer;
