import {
  CHARACTERS_DATA_REQUEST,
  CHARACTERS_DATA_RESPONSE,
  CHARACTERS_DATA_FAILED,
} from 'constants/actions';
import { Character } from 'types/characters';

export interface InitialStateCharacters {
  data: Character[] | null;
  isLoading: boolean;
  error: string | null;
}

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
