import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { MAIN, CHARACTERS, EPISODES, LOCATIONS } from 'constants/paths';
import { useClasses } from './styles';
import icon from 'assets/icon.svg';

const headerLinks = [
  { path: MAIN, label: 'Home' },
  { path: CHARACTERS, label: 'Characters' },
  { path: LOCATIONS, label: 'Locations' },
  { path: EPISODES, label: 'Episodes' },
];

const Header = (): ReactElement => {
  const classes = useClasses();

  return (
    <div className={classes.header}>
      <img src={icon} alt="logo" />
      <div className={classes.headerLinks}>
        {headerLinks.map((link) => (
          <Link to={link.path} key={link.label} className={classes.link}>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
