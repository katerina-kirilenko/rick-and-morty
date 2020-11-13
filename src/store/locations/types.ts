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
import { Location } from 'types/locations';

export interface InitialStateLocations {
  data: Location[];
  selectedLocation: Location | null;
  isLoading: boolean;
  error: string | null;
  pagesCount: number;
  currentPage: number;
}

export interface RequestDataLocationsAction {
  type: typeof LOCATIONS_DATA_REQUEST;
}

export interface ResponseDataLocationsAction {
  type: typeof LOCATIONS_DATA_RESPONSE;
  payload: Location[];
}

export interface FailedDataLocationsAction {
  type: typeof LOCATIONS_DATA_FAILED;
  payload: string;
}

export interface RequestLocationAction {
  type: typeof LOCATION_REQUEST;
  payload: string;
}

export interface ResponseLocationAction {
  type: typeof LOCATION_RESPONSE;
  payload: Location;
}

export interface FailedLocationAction {
  type: typeof LOCATION_FAILED;
  payload: string;
}

export interface SetPagesCountAction {
  type: typeof LOCATIONS_SET_PAGES_COUNT;
  payload: number;
}

export interface SetCurrentPageAction {
  type: typeof LOCATIONS_SET_CURRENT_PAGE;
  payload: number;
}

export type LocationsActionTypes =
  | RequestDataLocationsAction
  | ResponseDataLocationsAction
  | FailedDataLocationsAction
  | SetPagesCountAction
  | SetCurrentPageAction
  | RequestLocationAction
  | ResponseLocationAction
  | FailedLocationAction;

export interface LocationPropsSaga {
  type: string;
  payload: string;
}
