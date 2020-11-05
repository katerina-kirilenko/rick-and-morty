import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { CHARACTERS, EPISODES, LOCATIONS } from 'constants/paths';
import charactersImg from 'assets/character.jpg';
import locationsImg from 'assets/locations.jpeg';
import episodesImg from 'assets/episodes.jpeg';
import MenuCard from 'components/blocks/MenuCard';
import './style.css';

const MainPage = (): ReactElement => {
  return (
    <div className="main-page">
      <div className="page-description">
        <h1>Rick and Morty</h1>
        <p>Rick is a mad scientist who drags his grandson, Morty, on crazy sci-fi adventures.</p>
        <p>Their escapades often have potentially harmful consequences for their family ...</p>
      </div>
      <div className="menu-cards">
        <Link to={CHARACTERS}>
          <MenuCard img={charactersImg} label="Characters" />
        </Link>
        <Link to={EPISODES}>
          <MenuCard img={locationsImg} label="Locations" />
        </Link>
        <Link to={LOCATIONS}>
          <MenuCard img={episodesImg} label="Episodes" />
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
