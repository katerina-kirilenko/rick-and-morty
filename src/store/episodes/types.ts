import {
  EPISODES_DATA_REQUEST,
  EPISODES_DATA_RESPONSE,
  EPISODES_DATA_FAILED,
  SET_PAGES_COUNT,
  SET_CURRENT_PAGE,
} from 'constants/actions';
import { Episode } from 'types/episodes';

export interface InitialStateEpisodes {
  data: Episode[];
  isLoading: boolean;
  error: string | null;
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

export interface SetPagesCountAction {
  type: typeof SET_PAGES_COUNT;
  payload: number;
}

export interface SetCurrentPageAction {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
}

export type EpisodesActionTypes =
  | RequestDataEpisodesAction
  | ResponseDataEpisodesAction
  | FailedDataEpisodesAction
  | SetPagesCountAction
  | SetCurrentPageAction;
