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
  episodes: [],
  selectedEpisode: null,
  isLoadingEpisodesList: false,
  errorEpisodesList: null,
  isLoadingEpisode: false,
  errorEpisode: null,
  pagesCount: 0,
  currentPage: 0,
};

export default (state = initialState, action: EpisodesActionTypes): InitialStateEpisodes => {
  switch (action.type) {
    case EPISODES_DATA_REQUEST:
      return {
        ...state,
        isLoadingEpisodesList: true,
      };
    case EPISODES_DATA_RESPONSE:
      return {
        ...state,
        episodes: action.payload,
        isLoadingEpisodesList: false,
      };
    case EPISODES_DATA_FAILED:
      return {
        ...state,
        errorEpisodesList: action.payload,
        isLoadingEpisodesList: false,
      };
    case EPISODE_REQUEST:
      return {
        ...state,
        isLoadingEpisode: true,
      };
    case EPISODE_RESPONSE:
      return {
        ...state,
        selectedEpisode: action.payload,
        isLoadingEpisode: false,
      };
    case EPISODE_FAILED:
      return {
        ...state,
        errorEpisode: action.payload,
        isLoadingEpisode: false,
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
