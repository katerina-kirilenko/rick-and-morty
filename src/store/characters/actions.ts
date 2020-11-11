import { Character } from 'types/characters';
import {
  CHARACTERS_DATA_REQUEST,
  CHARACTERS_DATA_RESPONSE,
  CHARACTERS_DATA_FAILED,
  CHARACTERS_SET_PAGES_COUNT,
  CHARACTERS_SET_CURRENT_PAGE,
} from 'constants/actions';
import {
  RequestDataCharactersAction,
  ResponseDataCharactersAction,
  FailedDataCharactersAction,
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

export const setPagesCount = (count: number): SetPagesCountAction => ({
  type: CHARACTERS_SET_PAGES_COUNT,
  payload: count,
});

export const setCurrentPage = (currentPage: number): SetCurrentPageAction => ({
  type: CHARACTERS_SET_CURRENT_PAGE,
  payload: currentPage,
});
