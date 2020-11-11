import { Episode } from 'types/episodes';
import {
  EPISODES_DATA_REQUEST,
  EPISODES_DATA_RESPONSE,
  EPISODES_DATA_FAILED,
  SET_PAGES_COUNT,
  SET_CURRENT_PAGE,
} from 'constants/actions';
import {
  RequestDataEpisodesAction,
  ResponseDataEpisodesAction,
  FailedDataEpisodesAction,
  SetPagesCountAction,
  SetCurrentPageAction,
} from './types';

export const fetchDataEpisodesRequest = (): RequestDataEpisodesAction => ({
  type: EPISODES_DATA_REQUEST,
});

export const fetchDataEpisodesResponse = (data: Episode[]): ResponseDataEpisodesAction => ({
  type: EPISODES_DATA_RESPONSE,
  payload: data,
});

export const fetchDataEpisodesFailed = (text: string): FailedDataEpisodesAction => ({
  type: EPISODES_DATA_FAILED,
  payload: text,
});

export const setPagesCount = (count: number): SetPagesCountAction => ({
  type: SET_PAGES_COUNT,
  payload: count,
});

export const setCurrentPage = (currentPage: number): SetCurrentPageAction => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});
