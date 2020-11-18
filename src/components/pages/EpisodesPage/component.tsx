import React, { ReactElement, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import {
  fetchDataEpisodesRequest,
  getCurrentPage,
  getPagesCount,
  getEpisodes,
  setCurrentPage,
} from 'store/episodes';
import Header from 'components/blocks/Header';
import EpisodesList from 'components/blocks/EpisodesList';
import Pagination from 'components/blocks/Pagination';
import ErrorAlert from 'components/blocks/ErrorAlert';
import Spinner from 'components/blocks/Spinner';
import { useClasses } from './styles';

interface dataType {
  selected: number;
}

const EpisodesPage = (): ReactElement => {
  const classes = useClasses();

  const dispatch = useDispatch();
  const pagesCount = useSelector(getPagesCount);
  const currentPage = useSelector(getCurrentPage);

  const { episodes, isLoadingEpisodesList, errorEpisodesList } = useSelector(getEpisodes);
  const hasData = !(isLoadingEpisodesList || errorEpisodesList);

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
    <div className={clsx('page', classes.episodesPage)}>
      <div className="wrapper">
        <Header />
        <section className="container">
          {errorEpisodesList && <ErrorAlert errorText={errorEpisodesList} />}
          {isLoadingEpisodesList && <Spinner />}
          {hasData && <EpisodesList data={episodes} onItemSelected={handler} />}

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

export default EpisodesPage;
