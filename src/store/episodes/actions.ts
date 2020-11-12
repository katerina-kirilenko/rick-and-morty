import { Episode } from 'types/episodes';
import {
  EPISODES_DATA_REQUEST,
  EPISODES_DATA_RESPONSE,
  EPISODES_DATA_FAILED,
  EPISODES_SET_PAGES_COUNT,
  EPISODES_SET_CURRENT_PAGE,
  EPISODE_REQUEST,
  EPISODE_RESPONSE,
  EPISODE_FAILED,
} from 'constants/actions';
import {
  RequestDataEpisodesAction,
  ResponseDataEpisodesAction,
  FailedDataEpisodesAction,
  RequestEpisodeAction,
  ResponseEpisodeAction,
  FailedEpisodeAction,
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

export const fetchEpisodeRequest = (id: string): RequestEpisodeAction => ({
  type: EPISODE_REQUEST,
  payload: id,
});

export const fetchEpisodeResponse = (data: Episode): ResponseEpisodeAction => ({
  type: EPISODE_RESPONSE,
  payload: data,
});

export const fetchEpisodeFailed = (text: string): FailedEpisodeAction => ({
  type: EPISODE_FAILED,
  payload: text,
});

export const setPagesCount = (count: number): SetPagesCountAction => ({
  type: EPISODES_SET_PAGES_COUNT,
  payload: count,
});

export const setCurrentPage = (currentPage: number): SetCurrentPageAction => ({
  type: EPISODES_SET_CURRENT_PAGE,
  payload: currentPage,
});
