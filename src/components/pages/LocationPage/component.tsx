import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocationRequest, getLocation } from 'store/locations';
import Header from 'components/blocks/Header';
import ErrorAlert from 'components/blocks/ErrorAlert';
import Spinner from 'components/blocks/Spinner';
import { CHARACTERS } from 'constants/paths';
import { LocationItemProps } from './types';
import { useClasses } from './styles';

const LocationPage = (): ReactElement => {
  const classes = useClasses();
  const dispatch = useDispatch();

  const { id } = useParams<LocationItemProps>();

  useEffect(() => {
    dispatch(fetchLocationRequest(id));
  }, [id]);

  const { isLoading, error, selectedLocation } = useSelector(getLocation);
  const hasData = !(isLoading || error);
  const { name, type, dimension, residents } = selectedLocation || {};

  const charactersList = residents?.map((item, idx) => {
    const characterNumber = item.match(/\d+/);
    return (
      <li key={idx}>
        <a href={`${CHARACTERS}${characterNumber}`}>Character № {characterNumber}</a>
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
                  <span>The name of the location:</span> {name}
                </h4>
                <p>
                  <span>The type of the location:</span> {type}
                </p>
                <p>
                  <span>The dimension in which the location is located:</span> {dimension}
                </p>
              </div>

              <div className={classes.characters}>
                <p>List of character who have been last seen in the location:</p>
                <ul className={classes.charactersList}>{charactersList}</ul>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default LocationPage;
