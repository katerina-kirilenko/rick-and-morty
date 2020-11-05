import { Character } from 'types/characters';
import {
  CHARACTERS_DATA_REQUEST,
  CHARACTERS_DATA_RESPONSE,
  CHARACTERS_DATA_FAILED,
} from 'constants/actions';

interface RequestDataCharactersAction {
  type: typeof CHARACTERS_DATA_REQUEST;
}

interface ResponseDataCharactersAction {
  type: typeof CHARACTERS_DATA_RESPONSE;
  payload: Character[];
}

interface FailedDataCharactersAction {
  type: typeof CHARACTERS_DATA_FAILED;
  payload: string;
}

export type DataCharactersActionTypes =
  | RequestDataCharactersAction
  | ResponseDataCharactersAction
  | FailedDataCharactersAction;
