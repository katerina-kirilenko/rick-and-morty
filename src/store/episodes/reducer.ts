import {
  EPISODES_DATA_REQUEST,
  EPISODES_DATA_RESPONSE,
  EPISODES_DATA_FAILED,
  SET_PAGES_COUNT,
  SET_CURRENT_PAGE,
} from 'constants/actions';
import { EpisodesActionTypes, InitialStateEpisodes } from './types';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  pagesCount: 0,
  currentPage: 0,
};

export default (state = initialState, action: EpisodesActionTypes): InitialStateEpisodes => {
  switch (action.type) {
    case EPISODES_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EPISODES_DATA_RESPONSE:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case EPISODES_DATA_FAILED:
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
