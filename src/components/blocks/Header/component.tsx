import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { MAIN, CHARACTERS, EPISODES, LOCATIONS } from 'constants/paths';
import icon from 'assets/icon.svg';
import './style.css';

const headerLinks = [
  { path: MAIN, label: 'Home' },
  { path: CHARACTERS, label: 'Characters' },
  { path: LOCATIONS, label: 'Locations' },
  { path: EPISODES, label: 'Episodes' },
];

const Header = (): ReactElement => {
  return (
    <div className="header">
      <img src={icon} alt="icon" />
      <div className="header-links">
        {headerLinks.map((link) => (
          <Link to={link.path} key={link.label} className="link">
            <span className="link-label">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
