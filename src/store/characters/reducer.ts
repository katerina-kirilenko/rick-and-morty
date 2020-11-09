import {
  CHARACTERS_DATA_REQUEST,
  CHARACTERS_DATA_RESPONSE,
  CHARACTERS_DATA_FAILED,
  SET_PAGES_COUNT,
  SET_CURRENT_PAGE,
} from 'constants/actions';
import { CharactersActionTypes, InitialStateCharacters } from './types';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  pagesCount: 1,
  currentPage: 1,
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
    case SET_PAGES_COUNT:
      return {
        ...state,
        pagesCount: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
