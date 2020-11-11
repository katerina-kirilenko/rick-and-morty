import {
  CHARACTERS_DATA_REQUEST,
  CHARACTERS_DATA_RESPONSE,
  CHARACTERS_DATA_FAILED,
  CHARACTERS_SET_PAGES_COUNT,
  CHARACTERS_SET_CURRENT_PAGE,
} from 'constants/actions';
import { Character } from 'types/characters';

export interface InitialStateCharacters {
  data: Character[];
  isLoading: boolean;
  error: string | null;
  pagesCount: number;
  currentPage: number;
}

export interface RequestDataCharactersAction {
  type: typeof CHARACTERS_DATA_REQUEST;
}

export interface ResponseDataCharactersAction {
  type: typeof CHARACTERS_DATA_RESPONSE;
  payload: Character[];
}

export interface FailedDataCharactersAction {
  type: typeof CHARACTERS_DATA_FAILED;
  payload: string;
}

export interface SetPagesCountAction {
  type: typeof CHARACTERS_SET_PAGES_COUNT;
  payload: number;
}

export interface SetCurrentPageAction {
  type: typeof CHARACTERS_SET_CURRENT_PAGE;
  payload: number;
}

export type CharactersActionTypes =
  | RequestDataCharactersAction
  | ResponseDataCharactersAction
  | FailedDataCharactersAction
  | SetPagesCountAction
  | SetCurrentPageAction;
