import { Character } from 'types/characters';
import {
  CHARACTERS_DATA_REQUEST,
  CHARACTERS_DATA_RESPONSE,
  CHARACTERS_DATA_FAILED,
} from 'constants/actions';
import { DataCharactersActionTypes } from './types';

export const fetchDataCharactersRequest = (): DataCharactersActionTypes => {
  return {
    type: CHARACTERS_DATA_REQUEST,
  };
};

export const fetchDataCharactersResponse = (data: Character[]): DataCharactersActionTypes => {
  return {
    type: CHARACTERS_DATA_RESPONSE,
    payload: data,
  };
};

export const fetchDataCharactersFailed = (text: string): DataCharactersActionTypes => {
  return {
    type: CHARACTERS_DATA_FAILED,
    payload: text,
  };
};
