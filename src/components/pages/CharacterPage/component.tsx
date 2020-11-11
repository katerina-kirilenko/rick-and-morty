import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CharacterItemProps } from './types';
import Header from 'components/blocks/Header';
import { getCharacters } from 'store/characters';
import { Character } from 'types/characters';
import { useClasses } from './styles';

const CharacterPage = (): ReactElement => {
  const classes = useClasses();

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
    <div className="page">
      <div className="wrapper">
        <Header />
        <section className={classes.container}>
          <div className={classes.about}>
            <div className={classes.photo}>
              <img src={image} alt={name} />
            </div>
            <div className={classes.description}>
              <h4>
                <span>The name of the character:</span> {name}
              </h4>
              <p>
                <span>The status of the character:</span> {status}
              </p>
              <p>
                <span>The species of the character:</span> {species}
              </p>
              {type && (
                <p>
                  <span>The type or subspecies of the character:</span> {type}
                </p>
              )}
              <p>
                <span>The gender of the character:</span> {gender}
              </p>
              <p>
                <span>Name to the character`s origin location:</span> {origin.name}
              </p>
              <p>
                <span>Name to the character`s last known location endpoint:</span> {location.name}
              </p>
            </div>
          </div>
          <div className={classes.episodes}>
            <p>List of episodes in which this character appeared:</p>
            <ul className={classes.episodesList}>{episodesList}</ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CharacterPage;
