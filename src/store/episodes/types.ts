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
import { Episode } from 'types/episodes';

export interface InitialStateEpisodes {
  episodes: Episode[];
  selectedEpisode: Episode | null;
  isLoadingEpisodesList: boolean;
  errorEpisodesList: string | null;
  isLoadingEpisode: boolean;
  errorEpisode: string | null;
  pagesCount: number;
  currentPage: number;
}

export interface RequestDataEpisodesAction {
  type: typeof EPISODES_DATA_REQUEST;
}

export interface ResponseDataEpisodesAction {
  type: typeof EPISODES_DATA_RESPONSE;
  payload: Episode[];
}

export interface FailedDataEpisodesAction {
  type: typeof EPISODES_DATA_FAILED;
  payload: string;
}

export interface RequestEpisodeAction {
  type: typeof EPISODE_REQUEST;
  payload: string;
}

export interface ResponseEpisodeAction {
  type: typeof EPISODE_RESPONSE;
  payload: Episode;
}

export interface FailedEpisodeAction {
  type: typeof EPISODE_FAILED;
  payload: string;
}

export interface SetPagesCountAction {
  type: typeof EPISODES_SET_PAGES_COUNT;
  payload: number;
}

export interface SetCurrentPageAction {
  type: typeof EPISODES_SET_CURRENT_PAGE;
  payload: number;
}

export type EpisodesActionTypes =
  | RequestDataEpisodesAction
  | ResponseDataEpisodesAction
  | FailedDataEpisodesAction
  | SetPagesCountAction
  | SetCurrentPageAction
  | RequestEpisodeAction
  | ResponseEpisodeAction
  | FailedEpisodeAction;

export interface EpisodePropsSaga {
  type: string;
  payload: string;
}
