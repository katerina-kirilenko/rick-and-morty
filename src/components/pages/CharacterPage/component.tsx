import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CharacterItemProps } from './types';
import Header from 'components/blocks/Header';
import { getCharacters } from 'store/characters';
import { Character } from 'types/characters';
import './style.css';

const CharacterPage = (): ReactElement => {
  const { id } = useParams<CharacterItemProps>();
  const { data } = useSelector(getCharacters);
  const character = data.find((character) => character.id === +id) as Character;
  const { episode, gender, image, location, name, origin, species, status, type } = character;

  const episodesList = episode.map((item, idx) => {
    const episodeNumber = item.match(/\d+/);
    return (
      <li key={idx}>
        <a href={item} target="blank">
          Episode № {episodeNumber}
        </a>
      </li>
    );
  });

  return (
    <div className="character-page">
      <div className="wrapper">
        <Header />
        <section className="character-container">
          <div className="about">
            <div className="photo">
              <img src={image} alt={name} className="" />
            </div>
            <div className="description">
              <h4 className="name">
                <span>The name of the character:</span> {name}
              </h4>
              <p className="status">
                <span>The status of the character:</span> {status}
              </p>
              <p className="species">
                <span>The species of the character:</span> {species}
              </p>
              {type && (
                <p className="type">
                  <span>The type or subspecies of the character:</span> {type}
                </p>
              )}
              <p className="gender">
                <span>The gender of the character:</span> {gender}
              </p>
              <p className="origin">
                <span>Name to the character`s origin location:</span> {origin.name}
              </p>
              <p className="location">
                <span>Name to the character`s last known location endpoint:</span> {location.name}
              </p>
            </div>
          </div>
          <div className="episodes">
            <p>List of episodes in which this character appeared:</p>
            <ul className="episodes-list">{episodesList}</ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CharacterPage;
