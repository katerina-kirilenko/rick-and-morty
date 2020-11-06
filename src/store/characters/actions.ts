import { Character } from 'types/characters';
import {
  CHARACTERS_DATA_REQUEST,
  CHARACTERS_DATA_RESPONSE,
  CHARACTERS_DATA_FAILED,
} from 'constants/actions';
import { DataCharactersActionTypes } from './types';

export const fetchDataCharactersRequest = (): DataCharactersActionTypes => ({
  type: CHARACTERS_DATA_REQUEST,
});

export const fetchDataCharactersResponse = (data: Character[]): DataCharactersActionTypes => ({
  type: CHARACTERS_DATA_RESPONSE,
  payload: data,
});

export const fetchDataCharactersFailed = (text: string): DataCharactersActionTypes => ({
  type: CHARACTERS_DATA_FAILED,
  payload: text,
});