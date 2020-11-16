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
import { CharactersActionTypes, InitialStateCharacters } from './types';

const initialState = {
  data: [],
  selectedCharacter: null,
  isLoading: false,
  error: null,
  pagesCount: 0,
  currentPage: 0,
};

export default (state = initialState, action: CharactersActionTypes): InitialStateCharacters => {
  switch (action.type) {
    case CHARACTERS_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CHARACTERS_DATA_RESPONSE:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case CHARACTERS_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case CHARACTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CHARACTER_RESPONSE:
      return {
        ...state,
        selectedCharacter: action.payload,
        isLoading: false,
      };
    case CHARACTER_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case CHARACTERS_SET_PAGES_COUNT:
      return {
        ...state,
        pagesCount: action.payload,
      };
    case CHARACTERS_SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
