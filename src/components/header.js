import { Link } from 'gatsby';
import React from 'react';

import logo from '../images/launch-x-logo.svg';
import menuIcon from '../images/menu-icon.svg';

const headerStyle = {
  margin: `0 auto`,
  maxWidth: 1400,
  padding: `1.45rem 0`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const Header = () => (
  <div
    style={{
      marginBottom: `5rem`,
    }}
  >
    <div style={headerStyle}>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <img src={logo} alt="LaunchX" style={{ marginBottom: 0 }} />
        </Link>
      </h1>
      <img
        src={menuIcon}
        alt="Menu"
        style={{ marginBottom: 0, marginTop: '25px' }}
      />
    </div>
  </div>
);

export default Header;
