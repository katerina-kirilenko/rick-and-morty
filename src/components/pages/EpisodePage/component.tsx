import React, { ReactElement, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodeRequest, getEpisode } from 'store/episodes';
import Header from 'components/blocks/Header';
import ErrorAlert from 'components/blocks/ErrorAlert';
import Spinner from 'components/blocks/Spinner';
import { CHARACTERS } from 'constants/paths';
import { EpisodeItemProps } from './types';
import { useClasses } from './styles';

const EpisodePage = (): ReactElement => {
  const classes = useClasses();
  const dispatch = useDispatch();

  const { id } = useParams<EpisodeItemProps>();

  useEffect(() => {
    dispatch(fetchEpisodeRequest(id));
  }, [id]);

  const { isLoading, error, selectedEpisode } = useSelector(getEpisode);
  const hasData = !(isLoading || error);
  const { name, air_date, episode, characters } = selectedEpisode || {};

  const charactersList = characters?.map((item, idx) => {
    const characterNumber = item.match(/\d+/);
    return (
      <li key={idx}>
        <Link to={`${CHARACTERS}${characterNumber}`}>
          <span>Character № {characterNumber}</span>
        </Link>
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
              <div className={classes.description}>
                <h4>
                  <span>The name of the episode:</span> {name}
                </h4>
                <p>
                  <span> The air date of the episode:</span> {air_date}
                </p>
                <p>
                  <span>The code of the episode:</span> {episode}
                </p>
              </div>

              <div className={classes.characters}>
                <p>List of characters who have been seen in the episode:</p>
                <ul className={classes.charactersList}>{charactersList}</ul>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default EpisodePage;
