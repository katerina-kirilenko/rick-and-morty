import React, { ReactElement } from 'react';
import { Link, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { MAIN, CHARACTERS, EPISODES, LOCATIONS } from 'constants/paths';
import { HeaderProps } from './types';
import { useClasses } from './styles';
import icon from 'assets/icon.svg';

const headerLinks = [
  { path: MAIN, label: 'home' },
  { path: CHARACTERS, label: 'characters' },
  { path: LOCATIONS, label: 'locations' },
  { path: EPISODES, label: 'episodes' },
];

const Header = ({ backgroundColor }: HeaderProps): ReactElement => {
  const classes = useClasses();

  const { location } = useHistory();
  const path = location.pathname.match(/\/[a-z]+\//) || ' ';

  return (
    <div className={classes.header} style={{ backgroundColor }}>
      <img src={icon} alt="logo" />
      <div className={classes.headerLinks}>
        {headerLinks.map((link) => (
          <Link
            to={link.path}
            key={link.label}
            className={clsx(classes.link, {
              [classes.linkActive]: link.path.includes(path.toString()),
            })}
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
