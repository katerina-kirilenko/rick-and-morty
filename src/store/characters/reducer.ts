import {
  CHARACTERS_DATA_REQUEST,
  CHARACTERS_DATA_RESPONSE,
  CHARACTERS_DATA_FAILED,
} from 'constants/actions';
import { DataCharactersActionTypes, InitialStateCharacters } from './types';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export default (
  state = initialState,
  action: DataCharactersActionTypes,
): InitialStateCharacters => {
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
    default:
      return state;
  }
};
