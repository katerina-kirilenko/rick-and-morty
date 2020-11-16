import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { CHARACTERS, LOCATIONS, EPISODES } from 'constants/paths';
import charactersImg from 'assets/character.jpg';
import locationsImg from 'assets/locations.jpeg';
import episodesImg from 'assets/episodes.jpeg';
import MenuCard from 'components/blocks/MenuCard';
import { useClasses } from './styles';

const menuCards = [
  { path: CHARACTERS, img: charactersImg, label: 'characters' },
  { path: LOCATIONS, img: locationsImg, label: 'locations' },
  { path: EPISODES, img: episodesImg, label: 'episodes' },
];

const MainPage = (): ReactElement => {
  const classes = useClasses();

  return (
    <div className={clsx('page', classes.mainPage)}>
      <div className={classes.pageDescription}>
        <h1>Rick and Morty</h1>
        <p>Rick is a mad scientist who drags his grandson, Morty, on crazy sci-fi adventures.</p>
        <p>Their escapades often have potentially harmful consequences for their family ...</p>
      </div>
      <div className={classes.menuCards}>
        {menuCards.map((card) => {
          return (
            <Link to={card.path} key={card.label}>
              <MenuCard img={card.img} label={card.label} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
