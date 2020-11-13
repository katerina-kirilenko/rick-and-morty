import React, { ReactElement, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import {
  fetchDataLocationsRequest,
  getCurrentPage,
  getPagesCount,
  getLocations,
  setCurrentPage,
} from 'store/locations';
import Header from 'components/blocks/Header';
import Pagination from 'components/blocks/Pagination';
import LocationsList from 'components/blocks/LocationsList';
import ErrorAlert from 'components/blocks/ErrorAlert';
import Spinner from 'components/blocks/Spinner';
import { useClasses } from './styles';

interface dataType {
  selected: number;
}

const LocationsPage = (): ReactElement => {
  const classes = useClasses();

  const dispatch = useDispatch();
  const pagesCount = useSelector(getPagesCount);
  const currentPage = useSelector(getCurrentPage);

  const { data, isLoading, error } = useSelector(getLocations);
  const hasData = !(isLoading || error);

  const history = useHistory();
  const handler = useCallback((id: string | number) => (): void => history.push(`${id}`), [
    history,
  ]);

  useEffect(() => {
    dispatch(fetchDataLocationsRequest());
  }, [currentPage]);

  const handleClickPage = useCallback(
    (data: dataType): void => {
      dispatch(setCurrentPage(data.selected));
    },
    [dispatch],
  );

  return (
    <div className={clsx('page', classes.locationsPage)}>
      <div className="wrapper">
        <Header />
        <section className="container">
          {error && <ErrorAlert errorText={error} />}
          {isLoading && <Spinner />}
          {hasData && <LocationsList data={data} onItemSelected={handler} />}

          <Pagination
            pageCount={pagesCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handleClickPage}
            initialPage={currentPage}
          />
        </section>
      </div>
    </div>
  );
};

export default LocationsPage;
