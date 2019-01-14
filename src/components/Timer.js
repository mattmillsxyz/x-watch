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

const Unit = styled.div`
  margin-top: 1.5rem;
  color: gray;
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
          <Unit>DAYS</Unit>
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
          <Unit>HOURS</Unit>
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
          <Unit>MINUTES</Unit>
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
          <Unit>SECONDS</Unit>
        </TimeBlock>
      </TimerWrapper>
    );
  }
}

export default Timer;
