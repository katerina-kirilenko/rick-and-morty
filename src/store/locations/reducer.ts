import {
  LOCATIONS_DATA_REQUEST,
  LOCATIONS_DATA_RESPONSE,
  LOCATIONS_DATA_FAILED,
  LOCATIONS_SET_PAGES_COUNT,
  LOCATIONS_SET_CURRENT_PAGE,
  LOCATION_REQUEST,
  LOCATION_RESPONSE,
  LOCATION_FAILED,
} from 'constants/actions';
import { LocationsActionTypes, InitialStateLocations } from './types';

const initialState = {
  data: [],
  selectedLocation: null,
  isLoading: false,
  error: null,
  pagesCount: 0,
  currentPage: 0,
};

export default (state = initialState, action: LocationsActionTypes): InitialStateLocations => {
  switch (action.type) {
    case LOCATIONS_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOCATIONS_DATA_RESPONSE:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case LOCATIONS_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case LOCATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOCATION_RESPONSE:
      return {
        ...state,
        selectedLocation: action.payload,
        isLoading: false,
      };
    case LOCATION_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case LOCATIONS_SET_PAGES_COUNT:
      return {
        ...state,
        pagesCount: action.payload,
      };
    case LOCATIONS_SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
