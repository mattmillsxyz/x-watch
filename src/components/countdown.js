import React from 'react';

const wrapperStyles = {
  background: '#f4f4f4',
  width: '100%',
};

const timerStyles = {
  padding: '3% 7% 5%',
};

const headingStyle = {
  margin: '0 0 0 7%',
  paddingTop: '3rem',
  color: '#00CACA',
  fontWeight: 400,
};

const Countdown = data => {
  return (
    <div style={wrapperStyles}>
      <h5 style={headingStyle}>NEXT LAUNCH</h5>
      <div style={timerStyles}>
        <svg viewBox="0 0 66 12">
          <text
            style={{ fontFamily: 'Rajdhani' }}
            x="50%"
            y="12"
            textAnchor="middle"
          >
            01:10:23:36
          </text>
        </svg>
        <div style={{ marginTop: '2rem' }}>MISSON: SSO-A</div>
      </div>
    </div>
  );
};

export default Countdown;
