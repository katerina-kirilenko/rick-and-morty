import React, { ReactElement, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-paginate';
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
import './style.css';

interface dataType {
  selected: number;
}

const CharactersPage = (): ReactElement => {
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
    <div className="characters-page">
      <div className="wrapper">
        <Header />
        <section className="characters-container">
          {error && <ErrorAlert errorText={error} />}
          {isLoading && <Spinner />}
          {hasData && <CharactersList data={data} onItemSelected={handler} />}

          <Pagination
            previousLabel={'< prev'}
            nextLabel={'next >'}
            breakLabel={'...'}
            breakClassName={'pagination-item'}
            breakLinkClassName={'pagination-item-link'}
            pageClassName={'pagination-item'}
            pageLinkClassName={'pagination-item-link'}
            activeClassName={'current'}
            previousClassName={'pagination-item'}
            nextClassName={'pagination-item'}
            previousLinkClassName={'pagination-item-link'}
            nextLinkClassName={'pagination-item-link'}
            containerClassName={'pagination'}
            disabledClassName={'inactive'}
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
