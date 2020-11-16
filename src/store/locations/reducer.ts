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
  locations: [],
  selectedLocation: null,
  isLoadingLocationsList: false,
  errorLocationsList: null,
  isLoadingLocation: false,
  errorLocation: null,
  pagesCount: 0,
  currentPage: 0,
};

export default (state = initialState, action: LocationsActionTypes): InitialStateLocations => {
  switch (action.type) {
    case LOCATIONS_DATA_REQUEST:
      return {
        ...state,
        isLoadingLocationsList: true,
      };
    case LOCATIONS_DATA_RESPONSE:
      return {
        ...state,
        locations: action.payload,
        isLoadingLocationsList: false,
      };
    case LOCATIONS_DATA_FAILED:
      return {
        ...state,
        errorLocationsList: action.payload,
        isLoadingLocationsList: false,
      };
    case LOCATION_REQUEST:
      return {
        ...state,
        isLoadingLocation: true,
      };
    case LOCATION_RESPONSE:
      return {
        ...state,
        selectedLocation: action.payload,
        isLoadingLocation: false,
      };
    case LOCATION_FAILED:
      return {
        ...state,
        errorLocation: action.payload,
        isLoadingLocation: false,
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
