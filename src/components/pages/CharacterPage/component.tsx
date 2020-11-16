import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacterRequest, getCharacter } from 'store/characters';
import Header from 'components/blocks/Header';
import ErrorAlert from 'components/blocks/ErrorAlert';
import Spinner from 'components/blocks/Spinner';
import { EPISODES } from 'constants/paths';
import { CharacterItemProps } from './types';
import { useClasses } from './styles';

const CharacterPage = (): ReactElement => {
  const classes = useClasses();
  const dispatch = useDispatch();

  const { id } = useParams<CharacterItemProps>();

  useEffect(() => {
    dispatch(fetchCharacterRequest(id));
  }, [id]);

  const { isLoading, error, selectedCharacter } = useSelector(getCharacter);
  const hasData = !(isLoading || error);
  const { episode, gender, image, location, name, origin, species, status, type } =
    selectedCharacter || {};

  const episodesList = episode?.map((item, idx) => {
    const episodeNumber = item.match(/\d+/);
    return (
      <li key={idx}>
        <a href={`${EPISODES}${episodeNumber}`}>Episode № {episodeNumber}</a>
      </li>
    );
  });

  return (
    <div className="page">
      <div className="wrapper">
        <Header />
        <section className={classes.container}>
          {error && <ErrorAlert errorText={error} />}
          {isLoading && <Spinner />}
          {hasData && (
            <>
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
                    <span>Name to the character`s origin location:</span> {origin?.name}
                  </p>
                  <p>
                    <span>Name to the character`s last known location endpoint:</span>{' '}
                    {location?.name}
                  </p>
                </div>
              </div>
              <div className={classes.episodes}>
                <p>List of episodes in which this character appeared:</p>
                <ul className={classes.episodesList}>{episodesList}</ul>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default CharacterPage;
