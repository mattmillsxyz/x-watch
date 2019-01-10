import React from 'react';

const wrapperStyles = {
  background: '#f4f4f4',
  width: '100%',
  padding: '2rem',
};

const timerStyles = {
  fontSize: '8rem',
  lineHeight: 1,
  margin: '1rem 0',
};

const Countdown = data => {
  return (
    <div style={wrapperStyles}>
      <h6>NEXT LAUNCH</h6>
      <div style={timerStyles}>01 : 18 : 32 : 17</div>
    </div>
  );
};

export default Countdown;
