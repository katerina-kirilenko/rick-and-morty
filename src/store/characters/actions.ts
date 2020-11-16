import { Character } from 'types/characters';
import {
  CHARACTERS_DATA_REQUEST,
  CHARACTERS_DATA_RESPONSE,
  CHARACTERS_DATA_FAILED,
  CHARACTERS_SET_PAGES_COUNT,
  CHARACTERS_SET_CURRENT_PAGE,
  CHARACTER_REQUEST,
  CHARACTER_RESPONSE,
  CHARACTER_FAILED,
} from 'constants/actions';
import {
  RequestDataCharactersAction,
  ResponseDataCharactersAction,
  FailedDataCharactersAction,
  RequestCharacterAction,
  ResponseCharacterAction,
  FailedCharacterAction,
  SetPagesCountAction,
  SetCurrentPageAction,
} from './types';

export const fetchDataCharactersRequest = (): RequestDataCharactersAction => ({
  type: CHARACTERS_DATA_REQUEST,
});

export const fetchDataCharactersResponse = (data: Character[]): ResponseDataCharactersAction => ({
  type: CHARACTERS_DATA_RESPONSE,
  payload: data,
});

export const fetchDataCharactersFailed = (text: string): FailedDataCharactersAction => ({
  type: CHARACTERS_DATA_FAILED,
  payload: text,
});

export const fetchCharacterRequest = (id: string): RequestCharacterAction => ({
  type: CHARACTER_REQUEST,
  payload: id,
});

export const fetchCharacterResponse = (data: Character): ResponseCharacterAction => ({
  type: CHARACTER_RESPONSE,
  payload: data,
});

export const fetchCharacterFailed = (text: string): FailedCharacterAction => ({
  type: CHARACTER_FAILED,
  payload: text,
});

export const setPagesCount = (count: number): SetPagesCountAction => ({
  type: CHARACTERS_SET_PAGES_COUNT,
  payload: count,
});

export const setCurrentPage = (currentPage: number): SetCurrentPageAction => ({
  type: CHARACTERS_SET_CURRENT_PAGE,
  payload: currentPage,
});
