import {
  EPISODES_DATA_REQUEST,
  EPISODES_DATA_RESPONSE,
  EPISODES_DATA_FAILED,
  EPISODES_SET_PAGES_COUNT,
  EPISODES_SET_CURRENT_PAGE,
  EPISODE_REQUEST,
  EPISODE_RESPONSE,
  EPISODE_FAILED,
} from 'constants/actions';
import { EpisodesActionTypes, InitialStateEpisodes } from './types';

const initialState = {
  data: [],
  selectedEpisode: null,
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
    case EPISODE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EPISODE_RESPONSE:
      return {
        ...state,
        selectedEpisode: action.payload,
        isLoading: false,
      };
    case EPISODE_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case EPISODES_SET_PAGES_COUNT:
      return {
        ...state,
        pagesCount: action.payload,
      };
    case EPISODES_SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
