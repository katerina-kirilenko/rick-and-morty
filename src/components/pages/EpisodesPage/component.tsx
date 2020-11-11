import React, { ReactElement, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Pagination from 'react-paginate';
import Header from 'components/blocks/Header';
import {
  fetchDataEpisodesRequest,
  getCurrentPage,
  getPagesCount,
  getEpisodes,
  setCurrentPage,
} from 'store/episodes';
import ErrorAlert from 'components/blocks/ErrorAlert';
import Spinner from 'components/blocks/Spinner';
import EpisodesList from 'components/blocks/EpisodesList';
import './style.scss';

interface dataType {
  selected: number;
}

const EpisodesPage = (): ReactElement => {
  const dispatch = useDispatch();
  const pagesCount = useSelector(getPagesCount);
  const currentPage = useSelector(getCurrentPage);

  const { data, isLoading, error } = useSelector(getEpisodes);
  const hasData = !(isLoading || error);

  const history = useHistory();
  const handler = useCallback((id: string | number) => (): void => history.push(`${id}`), [
    history,
  ]);

  useEffect(() => {
    dispatch(fetchDataEpisodesRequest());
  }, [currentPage]);

  const handleClickPage = useCallback(
    (data: dataType): void => {
      dispatch(setCurrentPage(data.selected));
    },
    [dispatch],
  );

  return (
    <div className="page episodes-page">
      <div className="wrapper">
        <Header />
        <section className="container">
          {error && <ErrorAlert errorText={error} />}
          {isLoading && <Spinner />}
          {hasData && <EpisodesList data={data} onItemSelected={handler} />}

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

export default EpisodesPage;
