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
import { Character } from 'types/characters';

export interface InitialStateCharacters {
  data: Character[];
  selectedCharacter: Character | null;
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

export interface RequestCharacterAction {
  type: typeof CHARACTER_REQUEST;
  payload: string;
}

export interface ResponseCharacterAction {
  type: typeof CHARACTER_RESPONSE;
  payload: Character;
}

export interface FailedCharacterAction {
  type: typeof CHARACTER_FAILED;
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
  | RequestCharacterAction
  | ResponseCharacterAction
  | FailedCharacterAction
  | SetPagesCountAction
  | SetCurrentPageAction;

export interface CharacterPropsSaga {
  type: string;
  payload: string;
}
