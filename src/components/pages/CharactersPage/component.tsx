import React, { ReactElement, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'components/blocks/Pagination';
import {
  fetchDataCharactersRequest,
  getCharacters,
  getCurrentPage,
  getPagesCount,
  setCurrentPage,
} from 'store/characters';
import CharactersList from 'components/blocks/CharactersList';
import Header from 'components/blocks/Header';
import ErrorAlert from 'components/blocks/ErrorAlert';
import Spinner from 'components/blocks/Spinner';
import { useClasses } from './styles';

interface dataType {
  selected: number;
}

const CharactersPage = (): ReactElement => {
  const classes = useClasses();

  const dispatch = useDispatch();
  const pagesCount = useSelector(getPagesCount);
  const currentPage = useSelector(getCurrentPage);

  const { data, isLoading, error } = useSelector(getCharacters);
  const hasData = !(isLoading || error);

  const history = useHistory();
  const handler = useCallback((id: string | number) => (): void => history.push(`${id}`), [
    history,
  ]);

  useEffect(() => {
    dispatch(fetchDataCharactersRequest());
  }, [currentPage]);

  const handleClickPage = useCallback(
    (data: dataType): void => {
      dispatch(setCurrentPage(data.selected));
    },
    [dispatch],
  );

  return (
    <div className="page">
      <div className="wrapper">
        <Header />
        <section className={classes.container}>
          {error && <ErrorAlert errorText={error} />}
          {isLoading && <Spinner />}
          {hasData && <CharactersList data={data} onItemSelected={handler} />}

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

export default CharactersPage;
